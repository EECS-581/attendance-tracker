import React, { useState, useEffect, createContext, useContext } from "react";
import Image from "next/image";

const SuccessContext = createContext();

const Success = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      console.log("showing");
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <Image
          src="/assets/success.gif"
          alt="Success"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export const useSuccess = () => {
  const context = useContext(SuccessContext);
  if (!context) {
    throw new Error("useSuccess must be used within a SuccessProvider");
  }
  return context;
};

export const SuccessProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <SuccessContext.Provider value={{ show: setShow }}>
      <Success />
      {children}
    </SuccessContext.Provider>
  );
};
