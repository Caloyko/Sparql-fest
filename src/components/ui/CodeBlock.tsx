import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';

const CodeBlock = ({dataQuery, header=true, line= true, headerTitle= "Sparql"}) => {

  const [copied, setCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const editorRef = useRef<any>(null);
  const [height, setHeight] = useState(100);
  const lineNumbers = line ? 'on' : "off";
  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    updateHeight();
    editor.onDidChangeModelContent(updateHeight);
  };

  const updateHeight = () => {
    if (!editorRef.current) return;
    const lineCount = editorRef.current.getModel()?.getLineCount?.() ?? 1;
    const lineHeight = editorRef.current.getOption(28);
    const newHeight = lineCount * (lineHeight * 20) + 20;
    setHeight(newHeight);
  };
  const [query, setQuery] = useState("");
    const handleCopy = () => {
      navigator.clipboard.writeText(query);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative bg-gray-800 rounded-xl overflow-hidden mb-6 shadow-lg"
      onMouseMove={handleMouseMove}
    >
      { header && (<>
      <div className="bg-gray-700 text-white text-xs uppercase px-4 py-3 font-mono tracking-wide">
        {headerTitle}
      </div>

      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-500"
      >
        Copy
      </button>

      {copied && (
        <div
          className="fixed z-50  text-white text-xs px-2 py-1 rounded shadow transition-opacity duration-300 pointer-events-none"
          style={{
            top: mousePosition.y + 10,
            left: mousePosition.x + 10,
          }}
        >
          ✅ Copied !
        </div>
      )}</>)}

<Editor
        height={height}
        defaultLanguage="sparql"
        defaultValue={dataQuery}
        onMount={handleEditorDidMount}
        onChange={(value) => setQuery(value ?? '')}
        options={{
          readOnly: false,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
          theme: 'vs-dark',
          lineNumbers: lineNumbers,
        }}
      />
    </div>
  )
}

export default CodeBlock