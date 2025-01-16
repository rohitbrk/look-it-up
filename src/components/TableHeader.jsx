const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column} className="border border-gray-300 text-left p-2">
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
