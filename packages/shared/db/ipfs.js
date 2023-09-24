/*
 * Prologue Comments
 * Name of code artifact: IPFS HTTP Client Configuration
 * Brief description: This code creates and configures an instance of the IPFS HTTP client 
 * that connects to the Infura IPFS service. The configured instance is then exported 
 * for use in other parts of the application.
 * Programmer’s name: Hudson Headley
 * Date the code was created: 9-24-23

 * Preconditions:
 * - The environment variables NEXT_PUBLIC_INFURA_PROJECTID and NEXT_PUBLIC_INFURA_IPFS
 *   must be correctly set in the project's .env file, representing the Infura Project ID and 
 *   IPFS secret respectively.
 * 
 * Postconditions:
 * - Provides an instance of the IPFS HTTP client configured to connect to the Infura IPFS service.
 * 
 * Error and exception condition values or types that can occur:
 * - If the environment variables are not properly set, connection to the IPFS service may fail.
 * 
 * Side effects:
 * - None, as this code is only creating and exporting a configured instance of the IPFS HTTP client.
 * 
 * Invariants:
 * - The IPFS client configuration (host, port, protocol, apiPath, headers) should remain constant.
 * 
 * Any known faults:
 * - Lack of error handling for scenarios where environment variables are not properly set.
 * 
 */

import { create } from 'ipfs-http-client'; // Importing create function from ipfs-http-client library to create an instance of the client.

// Creating a Basic authorization header with Project ID and IPFS secret from environment variables, encoded in base64.
const auth = 'Basic ' + Buffer.from(process.env.NEXT_PUBLIC_INFURA_PROJECTID + ':' + process.env.NEXT_PUBLIC_INFURA_IPFS).toString('base64');

// Creating and configuring an instance of the IPFS HTTP client to connect to the Infura IPFS service.
const ipfs = create({
  host: 'ipfs.infura.io', // Setting the host to Infura's IPFS service.
  port: 5001, // Setting the port to 5001.
  protocol: 'https', // Using https protocol.
  apiPath: '/api/v0', // Setting the API path.
  headers: {
    authorization: auth, // Setting the authorization header.
  },
});

export default ipfs; // Exporting the configured IPFS client instance.
