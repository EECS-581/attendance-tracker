// Code Requirement 23.2 - Manage Coupons Page - Business Dashboard UI - Needs to have coupon list and manage coupon buttons
// This code creates the manage coupons page which is accessible from the Business Dashboard Page for the website
// Programmers name: Libby Miller
// Date: 10/17/2023
// Updated: 10/26/2023 - added support for modal for each of the buttons
// This pages sets up the UI, there are no pre or post conditions at this point, and no inputs to this page at this point
// eventually inputs to this page will be the coupons pulled in from the backend

// import necessary components
import React, { useState } from 'react';
// import Navbar
import Navbar from "@/components/navbar";
// import Footer
import Footer from "@/components/footer";
// import modal for coupon buttons
import CouponModal from '@/components/CouponModal';
import SolidColorButton from '@/components/SolidColorButton';
import LightColorfulButton from '@/components/LightColorfulButton';

// creates a static list of coupons - this will need to be updated when we are pulling from database
var listItems = ['10% off $10 order', '$2 off order', 'Free 12 oz. drink', 'Free delivery', 'Free meal upgrade'];

// create the page Manage Coupons
export default function Manage_Coupons() {

  // sets up variables for the add, update and delete button modals with a default value of false
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  // creates openUpdateModal method, updates modal open status
  const openUpdateModal = () => {
    setUpdateModalOpen(true);
  };
  // creates mehtod to close the modal
  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
  };
  // creates method to open delete modal
  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };
  // creates method to close delete modal
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };
  // creates method to close add modal
  const closeAddModal = () => {
    setAddModalOpen(false);
  };
  // creates method to open add modal
  const openAddModal = () => {
    setAddModalOpen(true);
  };

  return (
    // create main html to hold the page
    <main className="w-full overflow-hidden">
      {/* create containers to hold the navbar  */}
      <div className="py-6">
        <div className="container mx-auto">
        {/* This adds the navbar component to the page */}
          <Navbar />
        </div>
      </div>
      <div className="container mx-auto mt-6 px-4">
          {/* creates two headers for the page title and subtitle */}
          <h1 className="text-3xl font-semibold mb-2">Business Dashboard</h1>
          <h2 className="text-2xl font-medium mb-6">Manage Coupons</h2>
          <div className="flex space-x-4 mb-4">
            {/* creates the Add new class button - this opens the add form modal */}
            <SolidColorButton
              title="Add New Coupon"
              onClick = {openAddModal}
              backgroundColor = "pink"
              textColor = "black"
            />
          </div>
          {/* creates an html list, this will need to be refactored when pulling real data */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* loop through list items and generate a item for each one  */}
          {listItems.map((listItem, index) => (
            <li key={index} className="bg-white p-4 shadow-md rounded-md">
              {/* for each list item create a container to hold the buttons */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{listItem}</span>
                <div className="space-x-2">
                  {/* create a button for updating the coupon - this opens the modal  */}
                  <LightColorfulButton
                    title="Update"
                    onClick={openUpdateModal}
                    shadowColor='powderblue'
                  />
                  {/* create a button for deleting the coupon - this opens the modal */}
                  <LightColorfulButton
                    title="Delete"
                    onClick={openDeleteModal}
                    shadowColor='pink'
                  />
                </div>
              </div>
            </li>
            ))}

            {
            <div>
              {/* this handles the closing of all three modals  */}
              <CouponModal isOpen={isAddModalOpen} onClose={closeAddModal} actionType={"add"} />
              <CouponModal isOpen={isUpdateModalOpen} onClose={closeUpdateModal} actionType={"update"} />
              <CouponModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} actionType={"delete"} />
            </div>
           }
          </ul>
        </div>
      {/* This section creates a container to hold the footer */}
      <div className="py-4 text-center text-sm text-gray-600">
        {/* This creates an instance of the footer component */}
        <Footer />
      </div> 
    </main>
  );
}
