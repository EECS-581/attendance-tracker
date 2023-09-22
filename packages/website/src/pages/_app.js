import * as React from "react";
import { useRouter } from 'next/router';

import '@/styles/globals.css'
import { Web3Provider } from "@shared/contexts/web3Context.js";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return( 
    <Component {...pageProps} />
  );
}
export default MyApp;
