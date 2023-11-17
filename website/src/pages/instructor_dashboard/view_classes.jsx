// Code Requirement 27.1 - Instructor - View classes UI - Display a list of classes
// Code Requirement 22.2 - View Classes UI - Display buttons for adding, deleting, updating classes
// This code creates the Instructor's View Classes Page for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// Updated: 09/26/2023
// Updated: 10/17/2023, Requirement 36.7 - CSS styling version 1 - added tailwind css classes for styling
// Updated: 10/26/2023 - added support for modal for each of the buttons
// This pages sets up the UI, there are no pre or post conditions
// inputs to this page are the users addition, deletion, or updating of class items

// import the necessary components
// import Navbar component
import Navbar from "@/components/navbar";
// import Footer component
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { useWeb3Context } from "../../contexts/web3Context";
import { useGraphContext } from "../../contexts/graphContext";


import ClassModal from '@/components/ClassModal';
import SolidColorButton from '@/components/SolidColorButton';
import LightColorfulButton from '@/components/LightColorfulButton';
// creates a static list of classes - this will need to be updated when we are pulling from database
var listItems = ['EECS 101', 'EECS 581', 'EECS 658', 'EECS 388', 'EECS 268'];

// creates the View Classes page
export default function View_Classes() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { createClassSession, createClass, userWallet } = useWeb3Context();
  const { queryClassesByTeacher } = useGraphContext(); // Use the queryClassesByTeacher function

  useEffect(() => {
    console.log(userWallet);
    async function fetchClasses() {
      const classes = await queryClassesByTeacher(userWallet);
      if(classes) {
        setClasses(classes);
        setLoading(false);
      }
      
    }

    fetchClasses();
  }, [userWallet, createClass]);

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
    //creates a main html tag to hold the page 
    <main className="w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
        {/* This adds the navbar component to the page */}
          <Navbar />
        </div>
        <div className="container mx-auto mt-6 px-4">
          {/* creates two headers for the page title and subtitle */}
          <h1 className="text-3xl font-semibold mb-2">Instructor Dashboard</h1>
          <h2 className="text-2xl font-medium mb-6">View Classes</h2>
          <div className="flex space-x-4 mb-4">
            {/* creates the Add new class button, this will need to be updated once we have CRUD functionality */}
            <SolidColorButton
                title = "Add New Class"
                onClick = {openAddModal}
                backgroundColor = "pink"
                textColor = "black"
            />             
          </div>
          {/* creates an html list, this will need to be refactored when pulling real data */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* loops through the list items  */}
          {classes.map((classItem, index) => (
            // for each item create a list item element 
            <li key={index} className="bg-white p-4 shadow-md rounded-md">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{classItem.name}</span>
                {/* create a button for updating the class  */}
                <div className="space-x-2">
                  <LightColorfulButton
                    title="Update"
                    onClick={openUpdateModal}
                    shadowColor='powderblue'
                  />
                  {/* create a button for deleting the class  */}
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
              <ClassModal isOpen={isAddModalOpen} onClose={closeAddModal} actionType={"add"} />
              <ClassModal isOpen={isUpdateModalOpen} onClose={closeUpdateModal} actionType={"update"} />
              <ClassModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} actionType={"delete"} />
            </div>
            }
          </ul>
        </div>
      </div>
      {/* This section creates a container to hold the footer */}
      <div className="py-4 text-center text-sm text-gray-600">
        {/* This creates an instance of the footer component */}
        <Footer />
      </div> 
    </main>   
  );
};