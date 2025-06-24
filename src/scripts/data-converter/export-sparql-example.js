import fs from 'fs';
import path from 'path';
import { sparqlConceptsList } from '../../data/sparql-concept.js';

const globalPrefixes = new Map();

export function extractSparqlExampleQuery(basePath, outputPath, category ) {
    console.log(`Scanning from: ${basePath}`);
    const collected = printFolderStructure(basePath, category);
    generateFiles(collected, outputPath)

}

function printFolderStructure(currentPath,category,  indent = '',dir="", collected = {}) {
  const items = fs.readdirSync(currentPath, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(currentPath, item.name);

    if (item.isDirectory()) {
      console.log(`${indent}📁 ${item.name}`);
      collected[item.name] = [];
      collected = printFolderStructure(path.join(currentPath, item.name),category, indent + '  ',item.name, collected);
    } else {
      try {
        const content = fs.readFileSync(itemPath, 'utf-8');
        const result = parseQueryFile(content, dir, item.name, new Date() , category)
        if (result){
          if (collected[dir]) {
            collected[dir].push(result);
          } else {
            collected[dir] = [result];
          }
      }

      } catch (err) {
        console.log(indent + '  ⚠️ Error :', itemPath, err.message);
      }
    }
  }
  return collected

}

function generateFiles(collected, outputPath) {
  console.log(Object.keys(collected));

  for (const [folder, data] of Object.entries(collected)) {
    const outputFile = path.join(outputPath, `${folder}.js`);
    console.log(`Generate files for : ${folder}`);
    const fileContent = `export const ${folder} = ${JSON.stringify(data, null, 2)};`;
  
    fs.writeFileSync(outputFile, fileContent, 'utf-8');
    console.log(`✅ Files generated : ${outputFile}`);

    const prefixList = Array.from(globalPrefixes.values());
    const prefixOutputPath = path.join(outputPath, `prefixes.js`);
    const prefixContent = `export const prefixes = ${JSON.stringify(prefixList, null, 2)};`;
    fs.writeFileSync(prefixOutputPath, prefixContent, 'utf-8');
    console.log(`✅ Prefix file generated: ${prefixOutputPath}`);
  }
}

function parseQueryFile(content, folderName, fileName, date, category) {
  if (content.match(/sh:SPARQLSelectExecutable/)){

    const cleanFileName = fileName.replace(/\.[^/.]+$/, ''); 
    const name = `${folderName} - ${cleanFileName.replace(/_/g, ' ')}`;
    const slug = `${folderName}_${cleanFileName}`;

    // COmment from rdfs:comment
    const commentMatch = content.match(/rdfs:comment\s+"([^"]+)"/);
    const description = commentMatch ? commentMatch[1] : null;

    // SPARQL query
    let queryMatch = content.match(/sh:select\s+"""([\s\S]*?)"""|sh:select\s+'''([\s\S]*?)'''/);
    let query = queryMatch ? (queryMatch[1] || queryMatch[2]).trim() : null;
    
    if (!query) { // If query define in spex and not in sh:select
      queryMatch = content.match(/spex:describe\s+"""([\s\S]*?)"""/);
      query = queryMatch ? queryMatch[1].trim() : null;
    }
    // PREFIX
    const prefixMatches = Array.from(content.matchAll(/^@prefix\s+(\w+):\s+<([^>]+)>/gm));
    const prefixes = [];
    
    for (const match of prefixMatches) {
      const prefix = match[1].toUpperCase();
      const namespace = match[2];
      prefixes.push(prefix);
    
      if (!globalPrefixes.has(prefix)) {
        globalPrefixes.set(prefix, {
          prefix,
          name: match[1],
          namespace,
        });
      }
    }

    // Concepts
    const upperQuery = query.toUpperCase();
    const sparqlConcepts = sparqlConceptsList.filter(concept =>
      upperQuery.includes(concept)
    );

    return {
      name,
      slug,
      date,
      description,
      context: null,
      inidces: [],
      query,
      ontologies: prefixes,
      sparqlConcepts,
      category: `${category} ${folderName}`
    };
  } else {
    // We dont yet manage this case
    console.log(fileName, " No match")
    return null
  }
}


const basePath = path.resolve(process.cwd(), '../../data/external/sib-swiss'); 
const outputPath = path.resolve(process.cwd(), '../../data/queries-data/sib-swiss'); 


extractSparqlExampleQuery(basePath, outputPath, "sib-swiss")