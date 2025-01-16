import ManageColumns from "./ManageColumns";

const ManageColumnsModal = ({
  showManageColumns,
  setShowManageColumns,
  columns,
  toggleChecked,
}) => {
  return (
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
  );
};

export default ManageColumnsModal;
