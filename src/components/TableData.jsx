const TableData = ({ columns, filteredData }) => {
  return (
    <tbody>
      {filteredData.map((item, rowIndex) => (
        <tr
          key={item.id}
          className="hover:bg-gray-100 transition-all duration-200 ease-in-out block md:table-row mb-4 md:mb-0"
          aria-rowindex={rowIndex + 1}
        >
          {columns
            .filter((column) => column.checked)
            .map((column, colIndex) => (
              <td
                key={column.name}
                className={`border border-gray-300 text-left p-3 text-sm 
                  ${column.type === "number" ? "text-right" : "text-left"} 
                  block sm:inline-block md:table-cell`}
                aria-colindex={colIndex + 1}
              >
                <span className="font-semibold md:hidden">{column.name}: </span>
                {item[column.name]}
              </td>
            ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
