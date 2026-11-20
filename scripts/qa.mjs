import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('rebuild/game.js', 'utf8');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
const refs = [...js.matchAll(/\$\(['"]([^'"]+)['"]\)/g)].map(m => m[1]);
const missing = [...new Set(refs.filter(id => !ids.has(id)))];
assert.equal(missing.length, 0, `Missing HTML element IDs: ${missing.join(', ')}`);
assert.match(html, /type="module" src="\.\/rebuild\/game\.js"/, 'Game module entrypoint missing');
assert.match(html, /"three":"https:\/\/cdn\.jsdelivr\.net\/npm\/three@0\.160\.0\/build\/three\.module\.js"/, 'Three.js import map missing');
assert.match(js, /requestAnimationFrame\(animate\)/, 'Animation loop missing');
assert.match(js, /function update\(dt\)/, 'Driving update loop missing');
assert.match(js, /function updateCamera\(dt\)/, 'Camera update missing');
console.log(`QA passed: ${ids.size} HTML IDs, ${new Set(refs).size} unique JS DOM references, game entrypoint and core loops present.`);
