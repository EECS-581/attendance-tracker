// useLoading.js
import { useContext } from "react";
import { LoadingContext } from "./LoadingContext";

const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  const { isLoading, setLoading } = context;
  return [isLoading, setLoading];

  const load = async (callback) => {
    setLoading(true);
    try {
      await callback();
    } finally {
      setLoading(false);
    }
  };

  return [isLoading, load];
};

const useSpecificLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useSpecificLoading must be used within a LoadingProvider");
  }
  const { isSpecificLoading, setSpecificLoading } = context;
  return [isSpecificLoading, setSpecificLoading];
};

export { useLoading, useSpecificLoading };
