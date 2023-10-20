// loadingContext.js
import { createContext } from "react";

export const LoadingContext = createContext();

// LoadingProvider.js
import React, { useState } from "react";

export const LoadingProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [isSpecificLoading, setSpecificLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
        isSpecificLoading,
        setSpecificLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
