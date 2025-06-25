import React, { useState } from "react";

/*
type SparqlResult = {
  head: {
    vars: string[];
  };
  results: {
    bindings: {
      [varName: string]: {
        type: string;
        value: string;
      };
    }[];
  };
};

*/
const TableResults = ({ data }) => {
  const { vars } = data.head;
  const { bindings } = data.results;
  const total = bindings.length;

  const [expanded, setExpanded] = useState(false);
  const visibleRowCount = expanded ? bindings.length : 10;

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className="w-full overflow-x-auto">
      {bindings.length > 10 && (
        <div className="mt-4 text-left mb-4">
          <button
            onClick={toggleExpanded}
            className="text-sm bg-gray-700 py-3 px-4 mx-3 rounded-md hover:underline focus:outline-none"
          >
            {expanded ? `Hide lines : show only 10 / ${total}` : `Show all lines : ${total}`}
          </button>
        </div>
      )}

      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {vars.map((v) => (
              <th
                key={v}
                className="border border-gray-300 bg-gray-500 px-4 py-2 text-left text-sm font-medium text-stone-800"
              >
                {v}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bindings.slice(0, visibleRowCount).map((row, i) => (
            <tr key={i} className="even:bg-stone-800">
              {vars.map((v) => (
                <td key={v} className="border border-gray-300 px-4 py-2 text-sm">
                  {row[v]?.value ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
};

export default TableResults;