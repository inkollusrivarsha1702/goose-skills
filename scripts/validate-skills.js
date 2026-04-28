#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CATEGORIES = ['capabilities', 'composites', 'playbooks'];
const SCHEMA_PATH = path.join(ROOT, 'schemas', 'skill-meta.schema.json');

function fail(messages) {
  console.error('Skill validation failed:');
  for (const msg of messages) console.error(`- ${msg}`);
  process.exit(1);
}

function isValidSlug(slug) {
  return /^[a-z0-9-]+$/.test(slug);
}

const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf8'));
const allowedTags = new Set(schema.properties.tags.items.enum);

const errors = [];
const slugs = new Set();

// Walk the entire skills/ tree to find every SKILL.md location.
// Used at the end to assert every skill is represented in the index that
// build-index.js produces (catches RC1-style drift where skills exist on
// disk but aren't visible to downstream consumers).
function collectSkillMdDirs(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectSkillMdDirs(full, results);
    } else if (entry.name === 'SKILL.md') {
      results.push(path.relative(ROOT, path.dirname(full)));
    }
  }
  return results;
}

for (const category of CATEGORIES) {
  const categoryPath = path.join(ROOT, 'skills', category);
  if (!fs.existsSync(categoryPath)) continue;

  for (const slug of fs.readdirSync(categoryPath)) {
    const skillDir = path.join(categoryPath, slug);
    if (!fs.statSync(skillDir).isDirectory()) continue;

    const skillMd = path.join(skillDir, 'SKILL.md');
    const metaPath = path.join(skillDir, 'skill.meta.json');

    if (!fs.existsSync(skillMd)) {
      errors.push(`Missing SKILL.md for ${category}/${slug}`);
      continue;
    }
    if (!fs.existsSync(metaPath)) {
      errors.push(`Missing skill.meta.json for ${category}/${slug}`);
      continue;
    }

    let meta;
    try {
      meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
    } catch (err) {
      errors.push(`Invalid JSON in ${category}/${slug}/skill.meta.json`);
      continue;
    }

    if (!isValidSlug(slug)) {
      errors.push(`Directory slug has invalid format: ${category}/${slug}`);
    }
    if (meta.slug !== slug) {
      errors.push(`Slug mismatch in ${category}/${slug}: meta.slug=${meta.slug}`);
    }
    if (meta.category !== category) {
      errors.push(`Category mismatch in ${category}/${slug}: meta.category=${meta.category}`);
    }
    if (!Array.isArray(meta.tags)) {
      errors.push(`tags must be an array in ${category}/${slug}`);
    } else {
      const invalidTags = meta.tags.filter((t) => !allowedTags.has(t));
      if (invalidTags.length) {
        errors.push(
          `invalid tag(s) in ${category}/${slug}: ${invalidTags.join(', ')}. ` +
            `Allowed: ${[...allowedTags].sort().join(', ')}`
        );
      }
    }
    if (!meta.installation || typeof meta.installation.base_command !== 'string' || !meta.installation.base_command.trim()) {
      errors.push(`installation.base_command required in ${category}/${slug}`);
    }
    if (!meta.installation || !Array.isArray(meta.installation.supports) || meta.installation.supports.length === 0) {
      errors.push(`installation.supports required in ${category}/${slug}`);
    }

    if (slugs.has(slug)) {
      errors.push(`Duplicate slug: ${slug}`);
    }
    slugs.add(slug);
  }
}

// Tree ⊆ index check — every SKILL.md on disk must be representable in the
// index that build-index.js produces. Catches the RC1 class of bugs where
// skills exist on disk but the build script drops them (e.g., pack
// sub-skills missing from top-level skills[]).
const allSkillMdDirs = collectSkillMdDirs(path.join(ROOT, 'skills'));
const indexPath = path.join(ROOT, 'skills-index.json');
if (fs.existsSync(indexPath)) {
  let index;
  try {
    index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  } catch (err) {
    errors.push(`skills-index.json is not valid JSON: ${err.message}`);
  }

  if (index) {
    const indexed = new Set();
    for (const s of index.skills || []) {
      if (s.path) indexed.add(s.path);
    }
    for (const p of index.packs || []) {
      for (const s of p.skills || []) {
        if (s.path) indexed.add(s.path);
      }
    }

    const missing = allSkillMdDirs.filter((d) => !indexed.has(d));
    if (missing.length) {
      errors.push(
        `${missing.length} SKILL.md file(s) on disk are not represented in skills-index.json. ` +
          `Run \`npm run build:index\` to regenerate. Missing:\n  ${missing.join('\n  ')}`,
      );
    }
  }
} else {
  errors.push('skills-index.json missing — run `npm run build:index` first.');
}

if (errors.length) fail(errors);
console.log(`Skill validation passed for ${slugs.size} skills.`);
