import React, { useState, useEffect } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Import Google Sign-in Button Component
import GoogleSigninButton from '@/components/GoogleSigninButton';

export default function CreateAccount() {
  const [organization, setOrganization] = useState('');

  const handleOrganizationChange = (event) => {
    setOrganization(event.target.value);
  };

  return (
    <main className="w-full min-h-screen flex flex-col overflow-hidden bg-gray-100">
      <div className="py-6">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full sm:w-96 p-6 rounded-lg bg-white shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
          <form className="space-y-4">
            {/* Organization Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Organization</label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={organization}
                onChange={handleOrganizationChange}
              >
                <option value="">Select Organization</option>
                <option value="instructor">Instructor</option>
                <option value="business">Business</option>
                <option value="student">Student</option>
              </select>
            </div>
            
            {/* Google Sign-in Button */}
            <GoogleSigninButton />

          </form>
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