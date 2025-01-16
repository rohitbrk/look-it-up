import { useState } from "react";
import TableData from "./components/TableData";
import TableHeader from "./components/TableHeader";
import jsonData from "./data/data.json";

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
    "id",
    "name",
    "date",
    "status",
    "amount",
  ]);
  const [data, setData] = useState(jsonData.sort(sortOrder("id", "asc")));
  const [sorting, setSorting] = useState({ column: "id", order: "asc" });

  const handleSort = (column, order) => {
    setData((prev) => [...data].sort(sortOrder(column, order)));
    setSorting((prev) => ({ ...sorting, column, order }));
  };

  return (
    <>
      <div>
        <TableHeader
          columns={columns}
          handleSort={handleSort}
          sorting={sorting}
        />
        <TableData columns={columns} data={data} />
      </div>
    </>
  );
}

export default App;
