import HeaderCell from "./HeaderCell";

const TableHeader = ({ columns, handleSort, sorting }) => {
  return (
    <thead>
      <tr className="flex">
        {columns.map((column) => (
          <HeaderCell
            column={column}
            sorting={sorting}
            handleSort={handleSort}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
