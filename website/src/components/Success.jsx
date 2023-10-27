import React, { useState, useEffect, createContext, useContext } from "react";
import Image from "next/image";

const SuccessContext = createContext();

const Success = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      console.log("Success component is active");
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="p-4">
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

  const { show } = context;

  const trigger = () => {
    show(true);
  };
  console.log("returning trig");
  return trigger;
};

export const SuccessProvider = ({ children }) => {
  const [showState, setShowState] = useState(false);
  useEffect(() => {
    console.log("Show state is:", showState);
  }, [showState]);

  return (
    <SuccessContext.Provider value={{ show: setShowState }}>
      <Success />
      {children}
    </SuccessContext.Provider>
  );
};
