import React, { useEffect, useState } from "react";

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

interface TableResultsProps {
  slug: string;
}
*/
const TableResults/*: React.FC<TableResultsProps>*/ = ({ slug }) => {
  const [data, setData] = useState<SparqlResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setError(null);

    import(`../data/result-query/${slug}`)
      .then((module) => {
        setData(module.default);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load file: " + err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!data) return <p>No data to display</p>;

  const { vars } = data.head;
  const { bindings } = data.results;

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {vars.map((v) => (
            <th
              key={v}
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                backgroundColor: "#f0f0f0",
                textAlign: "left",
              }}
            >
              {v}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bindings.map((row, i) => (
          <tr key={i}>
            {vars.map((v) => (
              <td key={v} style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row[v]?.value ?? ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableResults;
