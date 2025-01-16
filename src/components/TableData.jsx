const TableData = ({ columns, data }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {columns.map((column) => (
            <td className="border border-gray-300 text-left p-2" key={column}>
              {item[column]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
