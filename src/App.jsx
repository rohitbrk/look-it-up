import { useState } from "react";
import TableData from "./components/TableData";
import TableHeader from "./components/TableHeader";
import jsonData from "./data/data.json";
import SearchComp from "./components/SearchComp";
import ManageColumns from "./components/ManageColumns";
import { sortOrder } from "./utils/sortOrder";

function App() {
  const initialData = jsonData.sort(sortOrder("id", "asc"));
  const [columns, setColumns] = useState(() => {
    let columns_ = [];
    for (let key in initialData[0]) {
      columns_.push(key);
    }
    let columnArray = [];
    for (let key of columns_) {
      columnArray.push({ name: key, checked: true });
    }
    return columnArray;
  });

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
        const _item = {};
        for (const key in item) {
          _item[key] = item[key].toString();
        }
        return _item[filterBasedOnColumn]
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

  // return <PaginatedList />;

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
            <div>
              <button
                onClick={() => setShowManageColumns((prev) => !prev)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none"
              >
                Manage Columns
              </button>
              {showManageColumns && (
                <ManageColumns
                  columns={columns}
                  toggleChecked={toggleChecked}
                  onClose={() => setShowManageColumns(false)}
                />
              )}
            </div>
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
