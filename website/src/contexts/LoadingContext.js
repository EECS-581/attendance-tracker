/**
 * Prologue Comments
 *
 * Name of code artifact: LoadingContext
 *
 * Brief description: This module defines a React context for managing and accessing loading state.
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
 * - This context is intended to be used with the LoadingProvider and any of its children components.
 *
 * Acceptable and unacceptable input values or types, and their meanings:
 * - None, as this is just a context declaration.
 *
 * Postconditions:
 * - Provides a context that can be used to share loading state across components.
 *
 * Error and exception condition values or types that can occur, and their meanings:
 * - None in this module.
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * - None.
 *
 * Any known faults:
 * - None known.
 *
 * Comments summarizing major blocks of code:
 * - The module simply creates and exports a new React context for loading state.
 */

import React from "react"; // Importing React from react.

const LoadingContext = React.createContext(); // Creating a new context for loading state.

export default LoadingContext; // Exporting the LoadingContext.
