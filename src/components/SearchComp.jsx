const SearchComp = ({
  columns,
  searchStr,
  handleFilteredList,
  filterBasedOnColumn,
  setFilterBasedOnColumn,
}) => {
  return (
    <div>
      <input
        placeholder="Search by name"
        value={searchStr}
        onChange={(e) => {
          handleFilteredList(e);
        }}
      />
      <select
        value={filterBasedOnColumn}
        onChange={(e) => setFilterBasedOnColumn((prev) => e.target.value)}
      >
        {columns.map((column) => {
          if (column.name === "name")
            return (
              <option value={column.name} key={column.name} selected>
                {column.name}
              </option>
            );
          return (
            <option value={column.name} key={column.name}>
              {column.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SearchComp;
