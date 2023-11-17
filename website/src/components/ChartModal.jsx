import React from 'react';

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="modal-overlay fixed inset-0 bg-black opacity-10"></div>

      <div className="modal-content bg-white p-4 rounded-lg shadow-lg w-96 relative">
        <span
          className="close-button absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </span>

        <h2 className="text-xl font-bold mb-4">Details</h2>

        {data && (
          <div>
            <p className="mb-2">
              <span className="font-semibold">Class name:</span> {data.name}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Attendance:</span> {data.attendance}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Date attended:</span> {data.date}
            </p>
            {/* Add more details as needed based on your data structure */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
