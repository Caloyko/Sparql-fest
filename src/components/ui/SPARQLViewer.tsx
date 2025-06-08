import React from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

export default function SPARQLMonaco() {
  return (
    <Editor
      height="200px"
      defaultLanguage="sparql"
      defaultValue={`PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?person ?name ?email WHERE {
  ?person a foaf:Person .
  ?person foaf:name ?name .
  OPTIONAL { ?person foaf:mbox ?email }
} LIMIT 100`}
      options={{ readOnly: true }}
    />
  );
}
