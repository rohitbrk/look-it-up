import React from "react";

const SearchComp = ({
  columns,
  searchStr,
  handleFilteredList,
  filterBasedOnColumn,
  setFilterBasedOnColumn,
  rightSideComponent,
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-4 p-4 font-sans justify-center">
        <input
          type="text"
          placeholder="Search by name"
          value={searchStr}
          onChange={handleFilteredList}
          className="p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search"
        />
        <select
          value={filterBasedOnColumn}
          onChange={(e) => setFilterBasedOnColumn(e.target.value)}
          className="p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Select Column"
        >
          {columns.map((column) => (
            <option value={column.name} key={column.name}>
              {column.name}
            </option>
          ))}
        </select>
        {rightSideComponent}
      </div>
    </div>
  );
};

export default SearchComp;
