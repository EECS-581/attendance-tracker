import React, { useState } from "react";
import LoadingContext from "./LoadingContext";
import Loading from "@/components/Loading.jsx";

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
