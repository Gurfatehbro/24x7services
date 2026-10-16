const fs = require('fs');
const html = fs.readFileSync('gdrive.html', 'utf8');

// Match rows containing data-id and IMG name
const rowMatches = [...html.matchAll(/data-id="([a-zA-Z0-9_-]{25,})"[\s\S]*?(IMG-20261016-WA\d+\.jpg)/g)];
const files = [];
const seen = new Set();
for (const m of rowMatches) {
  if (!seen.has(m[2])) {
    seen.add(m[2]);
    files.push({ id: m[1], name: m[2] });
  }
}
console.log(JSON.stringify(files, null, 2));
