import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Instructor_dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/view_classes">View Classes</a>
        </div>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/">QR Code Generator</a>
        </div>
      <Footer /> 
    </main>   
  );
};

