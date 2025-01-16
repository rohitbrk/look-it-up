import { useState } from "react";
import TableData from "./components/TableData";
import TableHeader from "./components/TableHeader";
import jsonData from "./data/data.json";
import SearchComp from "./components/SearchComp";
import ManageColumns from "./components/ManageColumns";

function sortOrder(key, order = "asc") {
  return function (a, b) {
    let itemA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    let itemB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    if (key === "date") {
      itemA = new Date(a[key]);
      itemB = new Date(b[key]);
    }

    let comparisonValue = 0;
    if (itemA > itemB) comparisonValue = 1;
    else if (itemA < itemB) comparisonValue = -1;

    return order === "desc" ? comparisonValue * -1 : comparisonValue;
  };
}

function App() {
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
  const [filteredData, setFilteredData] = useState(
    jsonData.sort(sortOrder("id", "asc"))
  );

  const handleFilteredList = (e) => {
    setSearchStr((prev) => e.target.value);
    if (e.target.value === "")
      setFilteredData((prev) => jsonData.sort(sortOrder("id", "asc")));
    else {
      const filteredItems = jsonData
        .sort(sortOrder("id", "asc"))
        .filter((item) => {
          return item.name.toUpperCase().includes(e.target.value.toUpperCase());
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

  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  return (
    <>
      <div>
        <SearchComponent data={data} />

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
          searchStr={searchStr}
          handleFilteredList={handleFilteredList}
        />
        <TableHeader
          columns={columns}
          handleSort={handleSort}
          sorting={sorting}
        />
        <TableData columns={columns} data={filteredData} />
      </div>
    </>
  );
}

export default App;
