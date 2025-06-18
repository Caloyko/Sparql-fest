import fs from 'fs';
import path from 'path';

console.log(process.cwd());
const sibSwissLogo = 'src/assets/images/SIB_logo.jpg';
const basePath = path.resolve(process.cwd(), '../../data/external/sib-swiss'); 
const outputPath = path.resolve(process.cwd(), '../../data/queries-data/sib-swiss'); 



function printFolderStructure(currentPath,  indent = '',dir="", collected = {}) {
  const items = fs.readdirSync(currentPath, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(currentPath, item.name);

    if (item.isDirectory()) {
      console.log(`${indent}📁 ${item.name}`);
      collected[item.name] = [];
      collected = printFolderStructure(path.join(currentPath, item.name), indent + '  ',item.name, collected);
    } else {
      try {
        const content = fs.readFileSync(itemPath, 'utf-8');
        const result = parseQueryFile(content, dir, item.name, "18-06-2025" )

        if (collected[dir]) {
          collected[dir].push(result);
        } else {
          collected[dir] = [result];
        }

      } catch (err) {
        console.log(indent + '  ⚠️ Erreur de lecture :', err.message);
      }
    }
  }
  return collected

}


console.log(`🧭 Scanning from: ${basePath}`);
const collected = printFolderStructure(basePath);
generateFiles(collected)

function generateFiles(collected) {
  console.log(Object.keys(collected));

  for (const [folder, data] of Object.entries(collected)) {
    const outputFile = path.join(outputPath, `${folder}.js`);
    console.log(`📦 Generate files for : ${folder}`);
    const fileContent = `export const ${folder} = ${JSON.stringify(data, null, 2)};`;
  
    fs.writeFileSync(outputFile, fileContent, 'utf-8');
    console.log(`✅ Files generated : ${outputFile}`);
  }
}

function parseQueryFile(content, folderName, fileName, date) {
  const cleanFileName = fileName.replace(/\.[^/.]+$/, ''); 
  const name = `${folderName} - ${cleanFileName.replace(/_/g, ' ')}`;
  const slug = `${folderName}_${cleanFileName}`;

  // COmment from rdfs:comment
  const commentMatch = content.match(/rdfs:comment\s+"([^"]+)"/);
  const description = commentMatch ? commentMatch[1] : null;

  // SPARQL query
  const queryMatch = content.match(/sh:select\s+"""([\s\S]*?)"""/);
  const query = queryMatch ? queryMatch[1].trim() : null;

  // PREFIX
  const prefixes = Array.from(content.matchAll(/^@prefix\s+(\w+):\s+/gm)).map(m => m[1].toUpperCase());

  // Concepts
  const sparqlConcepts = query
    ? Array.from(new Set(Array.from(query.matchAll(/\b([A-Z_]{2,})\b/g)).map(m => m[1])))
    : [];

  return {
    name,
    slug,
    date,
    image: sibSwissLogo,
    source: "https://github.com/sib-swiss/sparql-examples",
    description,
    context: null,
    inidces: [],
    query,
    ontologies: [folderName, ...prefixes],
    sparqlConcepts,
    category: `sib-swiss ${folderName}`
  };
}

