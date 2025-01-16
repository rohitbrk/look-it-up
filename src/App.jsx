import { useState } from "react";
import TableData from "./components/TableData";
import TableHeader from "./components/TableHeader";
import jsonData from "./data/data.json";
import SearchComp from "./components/SearchComp";
import ManageColumns from "./components/ManageColumns";
import { sortOrder } from "./utils/sortOrder";

function App() {
  const initialData = jsonData.sort(sortOrder("id", "asc"));
  const [columns, setColumns] = useState([
    { name: "id", checked: true },
    { name: "name", checked: true },
    { name: "date", checked: true },
    { name: "status", checked: true },
    { name: "amount", checked: true },
  ]);
  const [searchStr, setSearchStr] = useState("");
  const [sorting, setSorting] = useState({ column: "id", order: "asc" });
  const [showManageColumns, setShowManageColumns] = useState(false);
  const [filteredData, setFilteredData] = useState(initialData);
  const [filterBasedOnColumn, setFilterBasedOnColumn] = useState("name");

  const handleFilteredList = (e) => {
    setSearchStr((prev) => e.target.value);
    if (e.target.value === "")
      setFilteredData((prev) => jsonData.sort(sortOrder("id", "asc")));
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

  return (
    <>
      <div>
        {showManageColumns ? (
          <ManageColumns columns={columns} toggleChecked={toggleChecked} />
        ) : (
          <div></div>
        )}
        {
          <button onClick={() => setShowManageColumns((prev) => !prev)}>
            {showManageColumns ? "Close" : "Manage Columns"}
          </button>
        }
        <SearchComp
          columns={columns}
          searchStr={searchStr}
          handleFilteredList={handleFilteredList}
          filterBasedOnColumn={filterBasedOnColumn}
          setFilterBasedOnColumn={setFilterBasedOnColumn}
        />
        <TableHeader
          columns={columns}
          handleSort={handleSort}
          sorting={sorting}
        />
        <TableData columns={columns} filteredData={filteredData} />
      </div>
    </>
  );
}

export default App;
