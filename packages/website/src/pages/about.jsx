import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



export default function About() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      About Page
      <Footer /> 
      <button onClick={mintTest}>Mint</button>
    </main>   
  );
};