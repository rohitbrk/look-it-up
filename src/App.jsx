import TableData from "./components/TableData";
import TableHeader from "./components/TableHeader";
import data from "./data/data.json";

function App() {
  const columns = ["id", "name", "date", "status", "amount"];

  return (
    <>
      <div>
        <TableHeader columns={columns} />
        <TableData columns={columns} data={data} />
      </div>
    </>
  );
}

export default App;
