import HeaderCell from "./HeaderCell";

const TableHeader = ({ columns, handleSort, sorting }) => {
  return (
    <thead>
      <tr className="flex">
        {columns.filter((column) => column.checked).map((column) => (
          <HeaderCell
            column={column.name}
            sorting={sorting}
            handleSort={handleSort}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
