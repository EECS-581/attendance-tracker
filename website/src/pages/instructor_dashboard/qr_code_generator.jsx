// Code Requirement 15 - The application shall allow instructors to generate unique QR codes for selected class sessions
// This code creates the QR code generator page and allows the instructor to create a QR code for a class
// Programmers name: Libby Miller
// Date: 10/17/2023
// Pre/post/inputs: currently this page has not pre/post/inputs
// eventually this page will take the instructers classes as input for the select statement which is used to generate the qr code

// import the necessary components
// import Navbar component
import Navbar from "@/components/navbar";
// import Footer component
import Footer from "@/components/footer";
// import QRCode method from react-qr-code library
import QRCode from "react-qr-code";
// import useRef, and useState from react library
import { useRef, useState, useEffect } from "react";
import { useSuccess } from "@/components/Success";

// create static items for class options
// this will need to be replaced when backend is completed to pull from real data
const classOptions = [
  { value: "default", label: "Please select" },
  { value: "eecs101", label: "EECS 101" },
  { value: "eecs448", label: "EECS 448" },
  { value: "eecs658", label: "EECS 658" },
  { value: "eecs581", label: "EECS 581" },
];

// creates the insights page
export default function qr_code_generator() {
  const triggerSuccess = useSuccess();
  // create variables to track the value that the user selects from the dropdown list
  const [selectedValue, setSelectedValue] = useState("default"); // default value for the select
  // create variables to hold and set the data for the qr code to be generated with
  const [qrData, setQRData] = useState(""); // the data for the qr code
  // create a variable that connects to a reference object, intialized as null
  const qrCodeRef = useRef(null);
  // create a method to handle when the user selects a different element from the dropdown list
  const handleSelectChange = (event) => {
    // set the selected value to equal to current value of the selected item
    setSelectedValue(event.target.value);
  };
  // create a method that generates the qr code data
  const generateQRCode = async () => {
    try {
      // initialized an empty temp variable first
      let qrData = "";
      // if the value selected by user is eecs101
      if (selectedValue == "eecs101") {
        // set qr code data accordingly
        qrData = "www.google.com";
      }
      // if the value selected by user is eecs448
      else if (selectedValue == "eecs448") {
        // set qr code data accordingly
        qrData = "www.google.com";
      }
      // if the value selected by user is eecs658
      else if (selectedValue == "eecs658") {
        // set qr code data accordingly
        qrData = "www.google.com";
      }
      // if the value selected by user is eecs581
      else if (selectedValue == "eecs581") {
        // set qr code data accordingly
        qrData = "www.google.com";
      }
      // set the value of the global variable with qrData
      setQRData(qrData);
      triggerSuccess();
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  return (
    //creates a main html tag to hold the page
    <main className="w-full overflow-hidden">
      {/* creates containers to hold and format the navbar */}
      <div className="py-6">
        <div className="container mx-auto">
          {/* This adds the navbar component to the page */}
          <Navbar />
        </div>
        <div className="max-w-4xl mx-auto p-6">
          {/* creates two headers for the page title and subtitle */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center my-4">
            Instructor Dashboard
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 text-center my-4">
            QR Code Generation
          </h2>
          {/* create a container to hold the dropdown for the organizations */}
          <div className="container mx-auto mt-6 px-4">
            <div className="mb-4 max-w-sm">
              {/* creates a label for the dropdown */}
              <label htmlFor="orgs" className="text-lg font-semibold">
                Classes:{" "}
              </label>
              {/* creates the dropdown items, this will eventually be pulled in  */}
              {/* loop through the class list and create a option tag for each item  */}
              <select
                value={selectedValue}
                onChange={handleSelectChange}
                className="block mt-2 border border-gray-300 rounded p-2 w-full"
                name="orgs"
                id="orgs"
              >
                {classOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {/* create a button that generates the qr code when clicked */}
              <button
                onClick={generateQRCode}
                className="inline-flex rounded border-black border-2 px-2 py-3 items-center justify-center mt-2 mb-2 mr-2 font-bold bg-pink-200 text-black cursor-pointer decoration-none"
              >
                Generate QR Code
              </button>
            </div>
            <div>
              {/* use the qrData to create a QRCode element in DOM  */}
              {qrData && (
                // set the value to qrData value and set size of code
                <QRCode value={qrData} size={200} ref={qrCodeRef} />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* This section creates a container to hold the footer */}
      <div className="py-4 text-center text-sm text-gray-600">
        {/* This creates an instance of the footer component */}
        <Footer />
      </div>
    </main>
  );
}
