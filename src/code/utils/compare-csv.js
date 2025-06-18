import fs from 'fs';
import { parse } from 'csv-parse/sync';

function readCsv(filePath) {
  const fileContent = fs.readFileSync(filePath);
  return parse(fileContent, {
    columns: true,    
    skip_empty_lines: true,
    trim: true,
  });
}

function compareCsv(file1, file2) {


  const data1 = readCsv(file1);
  const data2 = readCsv(file2);

  const stringify = obj => JSON.stringify(obj);

  const set1 = new Set(data1.map(stringify));
  const set2 = new Set(data2.map(stringify));

  const onlyIn1 = [...set1].filter(x => !set2.has(x)).map(JSON.parse);
  const onlyIn2 = [...set2].filter(x => !set1.has(x)).map(JSON.parse);
  const inBoth = [...set1].filter(x => set2.has(x)).map(JSON.parse);

  console.log(`🔁 Lignes communes: ${inBoth.length}`);
  console.log(`➕ Uniquement dans ${file1}: ${onlyIn1.length}`);
  console.log(`➕ Uniquement dans ${file2}: ${onlyIn2.length}`);

  // Optionnel : afficher quelques différences
  if (onlyIn1.length > 0) {
    console.log(`\n📄 Extrait de ${file1} uniquement :`);
    console.log(onlyIn1.slice(0, 5));
  }

  if (onlyIn2.length > 0) {
    console.log(`\n📄 Extrait de ${file2} uniquement :`);
    console.log(onlyIn2.slice(0, 5));
  }
}

const fileA = '../../data/query-results/query-9.1.csv';
const fileB =  '../../data/query-results/query-9.2.csv';

compareCsv(fileA, fileB);
