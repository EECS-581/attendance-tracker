/*
 * Prologue Comments
 * Name of code artifact: MyApp Component
 * Brief description: This is the root component of a Next.js application. It wraps the
 * entire application and is used to apply global styles and context providers.
 * Programmer’s name: Hudson Headley
 * Date the code was created: 9-21-23
 * Brief description of each revision & author:
 * - Emma revised 10/8 to wrap app in loading provider
 *
 * Preconditions:
 * - The application must be a Next.js application.
 * - The Web3Provider and DbProvider must be correctly imported from the specified paths.
 *
 * Postconditions:
 * - Global styles are applied to the entire application.
 * - The Component passed to MyApp receives the pageProps.
 *
 * Error and exception condition values or types that can occur:
 * - If Web3Provider or DbProvider is not properly imported, the application will fail to compile.
 * - Any error in the Component or its child components will propagate up to MyApp.
 *
 * Side effects:
 * - If any state changes occur in the Component or its child components, it may cause a re-render of MyApp.
 *
 * Invariants:
 * - The global styles applied in globals.css must remain constant for the duration of the component's lifecycle.
 *
 * Any known faults:
 * - The Web3Provider and DbProvider are imported but not used or wrapped around the Component,
 *   so any contexts provided by them are not available to the Component and its child components.
 */

import * as React from "react"; // Importing everything as React from react
import { useRouter } from "next/router"; // Importing useRouter hook from next/router

import "@/styles/globals.css"; // Importing global styles
import { Web3Provider } from "../contexts/web3Context.js"; // Importing Web3Provider from the shared contexts
import { DbProvider } from "../contexts/dbContext.js" // Importing DbProvider from the shared contexts
import LoadingProvider from "../contexts/LoadingProvider.js";
import {GraphProvider} from "../contexts/graphContext.js"

// The MyApp component which receives Component and pageProps as props.
function MyApp({ Component, pageProps }) {
  const router = useRouter(); // Initializing the router object using useRouter hook

  // Returning the Component with its pageProps
  // The Web3Provider and DbProvider are imported but not used to wrap the Component.
  // To make the contexts available to the Component and its child components,
  // you should wrap the Component with these providers.
  return (
    
    <Web3Provider>
      <GraphProvider>
        <LoadingProvider>
          <Component {...pageProps} />
        </LoadingProvider>
      </GraphProvider>
    </Web3Provider>
  );
}

export default MyApp; // Exporting MyApp component as default export
