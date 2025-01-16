const HeaderCell = ({ column, sorting, handleSort }) => {
  let nextSortingOrder = "";
  let order = true;
  if (sorting.order === "desc") {
    order = true;
    nextSortingOrder = "asc";
  }
  if (sorting.order === "asc") {
    order = false;
    nextSortingOrder = "desc";
  }

  return (
    <th
      key={column}
      className={`border border-gray-300 text-left p-2 ${
        sorting.column === column ? "opacity-100" : "opacity-50"
      }`}
      onClick={() => handleSort(column, nextSortingOrder)}
    >
      {column}
      {order ? <span>▼</span> : <span>▲</span>}
    </th>
  );
};

export default HeaderCell;
