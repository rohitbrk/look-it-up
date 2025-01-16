import { useState } from "react";
import TableData from "./components/TableData";
import TableHeader from "./components/TableHeader";
import jsonData from "./data/data.json";
import SearchComp from "./components/SearchComp";
import { sortOrder } from "./utils/sortOrder";
import { getColumnsFromJson } from "./utils/getColumnsFromJson";
import ManageColumns from "./components/ManageColumns";

function App() {
  const initialData = jsonData.sort(sortOrder("id", "asc"));
  const [columns, setColumns] = useState(getColumnsFromJson(initialData));

  const [searchStr, setSearchStr] = useState("");
  const [sorting, setSorting] = useState({ column: "id", order: "asc" });
  const [showManageColumns, setShowManageColumns] = useState(false);
  const [filteredData, setFilteredData] = useState(initialData);
  const [filterBasedOnColumn, setFilterBasedOnColumn] = useState("name");

  const handleFilteredList = (e) => {
    setSearchStr((prev) => e.target.value);
    if (e.target.value === "") setFilteredData((prev) => initialData);
    else {
      const filteredItems = initialData.filter((item) => {
        return item[filterBasedOnColumn]
          .toString()
          .toUpperCase()
          .includes(e.target.value.toUpperCase());
      });
      setFilteredData((prev) => filteredItems);
    }
  };

  const toggleChecked = (name) => {
    let updatedColumns = [...columns];
    updatedColumns = updatedColumns.map((item) => {
      if (item.name === name) return { ...item, checked: !item.checked };
      else return item;
    });
    setColumns(updatedColumns);
  };

  const handleSort = (column, order) => {
    setFilteredData((prev) => [...filteredData].sort(sortOrder(column, order)));
    setSorting((prev) => ({ ...sorting, column, order }));
  };

  return (
    <>
      <div className="mt-4">
        <SearchComp
          columns={columns}
          searchStr={searchStr}
          handleFilteredList={handleFilteredList}
          filterBasedOnColumn={filterBasedOnColumn}
          setFilterBasedOnColumn={setFilterBasedOnColumn}
          rightSideComponent={
            <ManageColumns
              showManageColumns={showManageColumns}
              setShowManageColumns={setShowManageColumns}
              columns={columns}
              toggleChecked={toggleChecked}
            />
          }
        />
        <div className="w-full flex items-center justify-center">
          <div className="overflow-x-auto w-full sm:w-8/12 p-4">
            <table className="min-w-full table-auto table-fixed">
              <TableHeader
                columns={columns}
                handleSort={handleSort}
                sorting={sorting}
              />

              <TableData columns={columns} filteredData={filteredData} />
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
