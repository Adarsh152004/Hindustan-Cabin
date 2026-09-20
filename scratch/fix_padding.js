const fs = require('fs');
const files = [
  'app/about/page.js',
  'app/company-profile/page.js',
  'app/contact/page.js',
  'app/products/page.js',
  'app/products/[slug]/page.js'
];
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/className="min-h-screen ([^"]*)"/, 'className="min-h-screen pt-[72px] xl:pt-[112px] $1"');
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
}
