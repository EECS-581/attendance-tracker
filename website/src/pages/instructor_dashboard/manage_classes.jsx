import React, { useEffect, useState } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LightColorfulButton from "@/components/LightColorfulButton";
import SolidColorButton from "@/components/SolidColorButton";
import { useWeb3Context } from "../../contexts/web3Context";
import { useGraphContext } from "../../contexts/graphContext";

export default function Manage_Classes() {
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
  }, [userWallet]);

  return (
    <main className="w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="container mx-auto mt-6 px-4">
        <h1 className="text-3xl font-semibold mb-2">Instructor Dashboard</h1>
        <h2 className="text-2xl font-medium mb-6">Manage Classes</h2>
        <div className="flex space-x-4 mb-4">
          <SolidColorButton title="Add New Class" link="/" />
        </div>
        {loading ? (
          <p>Loading classes...</p>
        ) : classes.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {classes.map((classItem, index) => (
              <li key={index} className="bg-white p-4 shadow-md rounded-md">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{classItem.name}</span>
                  <div className="space-x-2">
                    <LightColorfulButton shadowColor="#D1CDC7" title="Update" link="/" />
                    <LightColorfulButton shadowColor="#D1CDC7" title="Delete" link="/" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No classes available</p>
        )}
      </div>
      <div className="py-4 text-center text-sm text-gray-600">
        <Footer />
      </div>
    </main>
  );
}

