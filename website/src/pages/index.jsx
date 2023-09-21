// Code Requirement 22.1 - Landing Page UI - Login and Create Account Buttons
// This code creates the Home or Landing Page for the website
// Programmers name: Libby Miller
// Date: 09/20/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// This imports the navbar component
import Navbar from "@/components/navbar";
// This imports the footer component 
import Footer from "@/components/footer";

// Creates a Home component to export to other pages if necessary
export default function Home() {
  return (
    // Creates a main tag to hold the entire page, so it can be styled as a whole
    // The main tag holds the navbar component, a container for the hero section of the page
    // A container to hold the create account and sign in buttons, and a container for the footer
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Navbar />
      </div>
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Attend This</h1>
        <h2 className="mb-4 text-xl">Streamlining Student Engagement in Education</h2>
        <p className="w-1/2">
          Attend This is an attendance reward tracker that enables students to collect tokens and rewards for class attendance, to incentivize greater participation and engagement in schools and universities.
        </p>
      </div>
      <div>     
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Account
        </button>
        <p>
          Already have an account?
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign in
        </button>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Footer />
      </div>
    </main>
  )
}
