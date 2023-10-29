// Code Requirement 36.8 - “Web - Other features: CSS styling version 2 - work on cross-site global styles”
// This code creates the manage Class page which is accessible from the Business Dashboard Page for the website
// Programmers name: Libby Miller
// Date: 10/26/2023
// This page creates the modal component to be used with Class, there are no pre or post conditions at this point
// inputs to this page are the users input into the modal to update, add, and delete Class

// import react and usestate from react
import React, { useState } from 'react';

function ClassModal({ isOpen, onClose, actionType }) {
  const [formData, setFormData] = useState({
    // default values
    title: '',
    description: ''
  });

  // creates method to handle when the confirm button is clicked
  // this will be updated when real data is used
  const handleConfirm = () => {
    if (actionType === 'update') {
      // Handle the update action
      alert("Class updated!", formData);
    } else if (actionType === 'delete') {
      // Handle the delete action
      alert("Data deleted!");
    } else if (actionType === 'add') {
      // handle the add action
      alert("Data added!", formData);
    }
    // Close the modal after the action is performed
    onClose();
  };

  // create method to handle changes to the form inputs fields
  const handleChange = (e) => {
    // Update the form data when input fields change
    const { name, value } = e.target;
    // set fields to values
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // creates the method to render the form element on screen
  const renderForm = () => {
    return (
      <div>
        {/* input for the name  */}
        <input
          type="text"
          name="name"
          placeholder="Class Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        {/* user input area  */}
        <textarea
          name="description"
          placeholder="Class Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
      </div>
    );
  };

  return (
    // The modal backdrop
    // check if modal is open
    isOpen && (
      // create containers to hold the modal 
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
        <div className="modal-container bg-white w-96 mx-auto rounded shadow-lg z-50">
          <div className="modal-content p-4">
            {/* create modal title  */}
            <h2 className="text-2xl font-semibold mb-4">
              {actionType === 'add' ? 'Add Class' : actionType === 'update' ? 'Update Class' : 'Delete Class'}
            </h2>
            {actionType === 'add' || actionType === 'update' ? renderForm() : null}
            {/* create button to confirm changes  */}
            <button
              className="text-white px-4 py-2 rounded-md mr-2 font-bold"
              onClick={handleConfirm}
              style={{
                backgroundColor: "powderblue"
              }}
            >
              Confirm
            </button>
            {/* create cancel button  */}
            <button className="bg-gray-300 px-4 py-2 rounded-md font-bold" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}
// export modal component so it can be used elsewhere
export default ClassModal;
