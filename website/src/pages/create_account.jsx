import React, { useState } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GoogleSigninButton from '@/components/GoogleSigninButton';
import UserTypeSelectCard from '@/components/UserTypeSelectCard';

export default function CreateAccount() {
  const [selectedOrganization, setSelectedOrganization] = useState('');

  const handleOrganizationSelect = (organization) => {
    setSelectedOrganization(organization);
  };

  return (
    <main className="w-full min-h-screen flex flex-col overflow-hidden bg-gray-100">
      <div className="py-6">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full sm:w-3/4 p-6 rounded-lg bg-white shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
          
          {!selectedOrganization ? (
            <div className="flex justify-between">
              <div className="mr-4">
                <UserTypeSelectCard name="Instructor" image="path_to_instructor_image" onSelect={handleOrganizationSelect} />
              </div>
              <div className="mr-4">
                <UserTypeSelectCard name="Student" image="path_to_student_image" onSelect={handleOrganizationSelect} />
              </div>
              <div>
                <UserTypeSelectCard name="Business" image="path_to_business_image" onSelect={handleOrganizationSelect} />
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-center mb-4">You selected: {selectedOrganization} Signin with Google to finish account Creation</h3>
              <div className="flex justify-center"> 
                <GoogleSigninButton />
              </div>
            </div>
          )}

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">Log in</a>
          </p>
        </div>
      </div>

      <div className="py-4 text-center text-sm text-gray-600">
        <Footer />
      </div>
    </main>
  );
}
