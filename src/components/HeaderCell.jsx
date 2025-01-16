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
      className={`border border-gray-300 text-left p-3 cursor-pointer 
        hover:bg-gray-100 
        transition-all duration-200 ease-in-out
        ${
          sorting.column === column
            ? "bg-gray-200 text-gray-800 font-semibold"
            : "opacity-70"
        }`}
      onClick={() => handleSort(column, nextSortingOrder)}
    >
      <div className="flex items-center justify-between">
        <span>{column}</span>
        <span className="text-sm ml-2">{order ? "▼" : "▲"}</span>
      </div>
    </th>
  );
};

export default HeaderCell;
