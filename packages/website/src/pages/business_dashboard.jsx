import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Business_dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
        <div className="">
          <label for="orgs">View Organizations: </label>
          <select className="block mt-4" name="orgs">
            <option value="ku">University of Kansas</option>
            <option value="">Lawrence Public Schools</option>
            <option value="">Others</option>
          </select>
        </div>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/">Manage Coupons</a>
        </div>
      <Footer /> 
    </main>   
  );
};