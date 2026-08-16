import React from 'react';

interface ComparisonTableProps {
  productName: string;
  versions: {
    name: string;
    specifications: { [key: string]: string };
    highlight?: boolean; // optional for "Best Value" badge
  }[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  productName,
  versions,
}) => {
  if (!versions || versions.length === 0) return null;

  const allSpecKeys = React.useMemo(() => {
    const keys = new Set<string>();
    versions.forEach((version) => {
      Object.keys(version.specifications).forEach((key) => {
        keys.add(key);
      });
    });
    return Array.from(keys).sort((a, b) => a.localeCompare(b));
  }, [versions]);

  return (
    <div className="mt-12 max-w-screen-xl mx-auto px-4">
      <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        {productName} Comparison Table
      </h3>

      <div className="relative overflow-x-auto border border-gray-200 shadow-md rounded-xl bg-white">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="sticky top-0 z-30 bg-gray-100 shadow-sm">
              <tr>
                <th className="sticky left-0 z-30 px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase bg-gray-100 backdrop-blur-sm border-r border-gray-200 whitespace-nowrap">
                  Specification
                </th>
                {versions.map((version, index) => (
                  <th
                    key={index}
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase whitespace-nowrap"
                  >
                    <div className="flex items-center gap-2">
                      {version.name}
                      {version.highlight && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          Best Value
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {allSpecKeys.map((specKey, index) => (
                <tr
                  key={index}
                  className="group hover:bg-indigo-50 transition duration-150"
                >
                  <td className="sticky left-0 z-20 px-6 py-4 font-medium text-gray-900 bg-white border-r border-gray-100 whitespace-nowrap">
                    {specKey}
                  </td>
                  {versions.map((version, versionIndex) => (
                    <td
                      key={versionIndex}
                      className="px-6 py-4 text-gray-600 whitespace-nowrap group-hover:text-gray-800 transition"
                    >
                      {version.specifications[specKey] || '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
