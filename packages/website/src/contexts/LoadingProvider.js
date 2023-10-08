/**
 * Prologue Comments
 *
 * Name of code artifact: LoadingProvider
 *
 * Brief description: This component provides a context for managing and displaying a loading state.
 *
 * Programmer’s name: Emma Nasseri
 *
 * Date the code was created: 10/08/2023
 *
 * Dates the code was revised:
 *
 * Brief description of each revision & author:
 * -
 *
 * Preconditions:
 * - Children components that want to utilize the loading context should be wrapped inside this provider.
 *
 * Acceptable and unacceptable input values or types, and their meanings:
 * - children: React components (acceptable). Any other type is unacceptable.
 *
 * Postconditions:
 * - Provides a context with `isLoading` state and `setIsLoading` function to children components.
 *
 * Error and exception condition values or types that can occur, and their meanings:
 * - None in this component.
 *
 * Side effects:
 * - When `isLoading` is true, the Loading component is rendered.
 *
 * Invariants:
 * - `isLoading` can only be a boolean.
 *
 * Any known faults:
 * - None known.
 *
 * - The component uses React's context API to provide a loading state to children components.
 * - When the `isLoading` state is true, the Loading component is displayed.
 */

import React, { useState } from "react"; // Importing React and useState hook from react.
import LoadingContext from "./LoadingContext"; // Importing the LoadingContext.
import Loading from "@/components/Loading.jsx"; // Importing the Loading component.

const LoadingProvider = ({ children }) => {
  // Defining the LoadingProvider component.
  const [isLoading, setIsLoading] = useState(false); // State to manage the loading status.

  return (
    // Providing the isLoading state and setIsLoading function to children components.
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Loading />} // Displaying the Loading component when
      isLoading is true.
      {children} // Rendering the children components.
    </LoadingContext.Provider>
  );
};

export default LoadingProvider; // Exporting the LoadingProvider component.
