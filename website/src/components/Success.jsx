import React, { useState, useEffect, createContext, useContext } from "react";
import Image from "next/image";

const SuccessContext = createContext();

const Success = () => {
  const context = useContext(SuccessContext);
  const { showState, setShowState } = context;

  useEffect(() => {
    if (showState) {
      console.log("Success component is active");
      const timer = setTimeout(() => {
        setShowState(false);
      }, 2000); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [showState]);

  if (!showState) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.2)", // semi-transparent black
        backdropFilter: "blur(3px)", // blur effect
      }}
    >
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

  const { setShowState } = context;

  const triggerSuccess = () => {
    setShowState(true);
  };

  return { triggerSuccess };
};


export const SuccessProvider = ({ children }) => {
  const [showState, setShowState] = useState(false);
  useEffect(() => {
    console.log("Show state is:", showState);
  }, [showState]);

  return (
    <SuccessContext.Provider value={{ showState, setShowState }}>
      <Success key={showState ? "visible" : "hidden"} />
      {children}
    </SuccessContext.Provider>
  );
};
