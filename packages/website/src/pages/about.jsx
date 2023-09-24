import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useWeb3Context} from "@shared/contexts/web3Context.js";



export default function About() {
  const { mintTest } = useWeb3Context();
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      About Page
      <Footer /> 
      <button onClick={mintTest}>Mint</button>
    </main>   
  );
};