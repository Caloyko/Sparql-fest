import path from 'path';
import { extractSparqlExampleQuery } from './export-sparql-example.js';

const sibBasePath = path.resolve(process.cwd(), '../../data/external/sib-swiss'); 
const sibOutputPath = path.resolve(process.cwd(), '../../data/queries-data/sib-swiss'); 

extractSparqlExampleQuery(sibBasePath, sibOutputPath, "sib-swiss")

const bigcatUmBasePath = path.resolve(process.cwd(), '../../data/external/BiGCAT-UM'); 
const bigcatUmOutputPath = path.resolve(process.cwd(), '../../data/queries-data/BiGCAT-UM'); 

extractSparqlExampleQuery(bigcatUmBasePath, bigcatUmOutputPath, "BiGCAT-UM")