// Code Requirement 36.6 - Login page - should work for instructors and business admin
// this will need to be refactored once we have authentication set up
// This code creates the Login Page for the website
// Programmers name: Libby Miller
// Date: 10/17/2023
// This pages sets up the UI, there are no pre or post conditions to this page
// inputs to this page are the users data for each field

// import necessary components
// import Navbar component
import Navbar from "@/components/navbar";
// import footer component 
import Footer from "@/components/footer";

// create login page 
export default function Login() {
  return (
    // create main html tag to hold page elements
    <main className="w-full min-h-screen flex flex-col overflow-hidden bg-gray-100">
      {/* create containers to hold navbar component  */}
      <div className="py-6">
        <div className="container mx-auto">
          {/* create instance of navbar  */}
          <Navbar />
        </div>
      </div>
      {/* create container to hold login form  */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full sm:w-96 p-6 rounded-lg bg-white shadow-md">
          {/* create title for login form  */}
          <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>
          {/* create form element  */}
          <form className="space-y-4">
            <div className="mb-4">
              {/* create label for email  */}
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              {/* create input for email  */}
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Email"
              />
            </div>
            {/* create label for password  */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              {/* create input for password  */}
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Password"
              />
            </div>
            {/* create submit button  */}
            {/* this will need to be refactored once SSO is set up */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
          </form>
          {/* create link to create account page  */}
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/create_account" className="text-blue-500 hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
      {/* create container for footer  */}
      <div className="py-4 text-center text-sm text-gray-600">
        {/* create instance of footer  */}
        <Footer />
      </div>
    </main>
  );
}

