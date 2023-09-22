import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function View_Classes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <h1>Instructor Dashboard</h1>
      <h2>View Classes</h2>
      <div>
        <ul>
          
          <li>Class 1</li>
          <li>Class 2</li>
          <li>Class 3</li>
          <li>Class 4</li>
          <li>Class 5</li>
          <li>Class 6</li>
          <li>Class 7</li>
          <li>Class 8</li>
          <li>Class 9</li>
          <li>Class 10</li>

        </ul>
      </div>
      <Footer /> 
    </main>   
  );
};