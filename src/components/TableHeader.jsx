import HeaderCell from "./HeaderCell";

const TableHeader = ({ columns, handleSort, sorting }) => {
  return (
    <thead className="hidden md:table-header-group">
      <tr className="bg-gray-200">
        {columns
          .filter((column) => column.checked)
          .map((column) => (
            <HeaderCell
              key={column.name}
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
