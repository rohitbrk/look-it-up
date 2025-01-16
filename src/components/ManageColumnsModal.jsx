import React from "react";

const Checkbox = ({ name, checked, toggleChecked }) => {
  return (
    <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg">
      <input
        value={name}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        checked={checked}
        onChange={() => {
          toggleChecked(name);
        }}
      />
      <label className="text-gray-700 font-medium">{name}</label>
    </div>
  );
};

const ManageColumnsModal = ({ columns, toggleChecked, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Manage Columns</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            ✕
          </button>
        </div>
        {columns.map((column) => (
          <div key={column.name} className="mb-2">
            <Checkbox
              name={column.name}
              checked={column.checked}
              toggleChecked={toggleChecked}
            />
          </div>
        ))}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageColumnsModal;
