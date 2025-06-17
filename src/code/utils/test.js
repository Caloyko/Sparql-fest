import fs from 'fs';

try {
  const fileContent = fs.readFileSync('../../data/query-results/query-9.1.csv', 'utf8');
  console.log(fileContent);
} catch (err) {
  console.error('Erreur lors de la lecture du fichier :', err);
}
