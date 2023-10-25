import React, { useState } from 'react';
import Navbar from "@/components/navbar"; // Import Navbar component
import Footer from "@/components/footer"; // Import footer component
import GoogleSigninButton from "@/components/GoogleSigninButton"; // Import Google Sign-In Button

export default function Login() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="w-full min-h-screen flex flex-col overflow-hidden bg-gray-100">
      {/* Navbar */}
      <div className="py-6">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>

      {/* Google Sign-In Button with Visual Depth */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full sm:w-96 p-6 rounded-lg bg-white shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>
          <div 
            className="flex items-center justify-center mb-4 transform transition-transform duration-500" 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <GoogleSigninButton 
              style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
            />
          </div>
          <p className="mt-4 text-center text-gray-600">
            For instructors and business admin
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="py-4 text-center text-sm text-gray-600">
        <Footer />
      </div>
    </main>
  );
}
