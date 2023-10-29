// Code Requirement 22.1 - Landing Page UI - Login and Create Account Buttons
// This code creates the Home or Landing Page for the website
// Programmers name: Libby Miller
// Date: 09/20/2023
// Updated: 10/05/2023, 10/08/2023 to implement loading
// Updated: 10/20/2023 - Requirement 36.7 - CSS styling version 1
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import necessary libraries and components
// import react, and usecontext methods from react
import React, { useContext } from "react";
// import the loading context component
import LoadingContext from "@/contexts/LoadingContext";
// import navbar component
import Navbar from "@/components/navbar";
// import footer component
import Footer from "@/components/footer";
// import button component
import LightColorfulButton from "@/components/LightColorfulButton";


import GoogleSigninButton from "@/components/GoogleSigninButton";


import Image from "next/image";

// This section creates the Home component
// Creates a Home component to export to other pages if necessary
export default function Home() {
  const { setIsLoading } = useContext(LoadingContext);
  //this handler is for the temporary test loading button. all it does is wait 4 seconds and let the loading function work.
  const handleTestLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds delay
  };
  return (
    // Creates a main tag to hold the entire page, so it can be styled as a whole
    // The main tag holds the navbar component, a container for the hero section of the page
    // A container to hold the create account and sign in buttons, and a container for the footer
    <main className="w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
          {/* This adds the navbar component to the page */}
          <Navbar />
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left side: Text content */}
          <div className="w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none text-gray-900 mb-4">
              AttendThis
            </h1>
            <h2 className="mb-4 text-xl">
              Streamlining Student Engagement in Education
            </h2>
            <p>
              AttendThis is an attendance reward tracker that enables students
              to collect tokens and rewards for class attendance, to incentivize
              greater participation and engagement in schools and universities.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src="/assets/classroom.png"
              alt="Classroom"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="py-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
          {/* This creates the button for creating an account - this links to the create account page  */}
          <LightColorfulButton
            shadowColor="powderblue"
            title="Create Account"
            link="/login"
          />
          {/* This creates a paragraph tag to hold this sentence between the buttons */}
          {/* <p className="text-gray-700">Already have an account?</p> */}
          {/* This section creates the container to hold the login button which redirects to the login page */}
          
          {/* <LightColorfulButton
            shadowColor="powderblue"
            title="Sign in"
            link="/login"
          /> */}
          <GoogleSigninButton />
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
