const fs = require('fs');
const path = require('path');

console.log('Starting to generate post list...');

const contentDir = path.join(__dirname, 'content', 'garden');
const indexFilePath = path.join(contentDir, 'hello.md');
console.log('Markdown files found:', files);

// Read all markdown files and generate links
fs.readdir(contentDir, (err, files) => {
  if (err) {
    console.error('Error reading content directory:', err);
    return;
  }

  const postLinks = files
    .filter(file => file.endsWith('.md') && file !== 'hello.md')
    .map(file => {
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const titleMatch = content.match(/^title: "(.+)"/m);
      const title = titleMatch ? titleMatch[1] : 'Untitled';
      console.log('Generated post links:', postLinks);
      return `- [${title}](./${file})`;
    });

  // Read the index file and insert the post list
  const indexContent = fs.readFileSync(indexFilePath, 'utf8');
  const updatedContent = indexContent.replace(
    /(## Blog Posts\n)([\s\S]*?)(\n##|$)/,
    `$1${postLinks.join('\n')}$3`
  );

  console.log('Updated index file content:', updatedContent);
  // Write the updated content back to the index file
  fs.writeFileSync(indexFilePath, updatedContent);
  console.log('Updated blog post list in hello.md');
});