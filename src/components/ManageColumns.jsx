const Checkbox = ({ name, checked, toggleChecked }) => {
  return (
    <div>
      <span>{name}</span>
      <input
        value={name}
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          toggleChecked(name);
        }}
      />
    </div>
  );
};

const ManageColumns = ({ columns, toggleChecked }) => {
  return (
    <div>
      {columns.map((column) => {
        return (
          <div key={column.name}>
            <Checkbox
              name={column.name}
              checked={column.checked}
              toggleChecked={toggleChecked}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ManageColumns;
