const TableData = ({ columns, data }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {columns
            .filter((column) => column.checked)
            .map((column) => (
              <td
                className="border border-gray-300 text-left p-2"
                key={column.name}
              >
                {item[column.name]}
              </td>
            ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
