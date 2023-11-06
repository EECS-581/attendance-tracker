// Code Requirement 36.5 - Create account page - the account page must allow users to create an account with a username, password, organization, and role
// this will need to be refactored once we have authentication set up
// This code creates the Create account Page for the website
// Programmers name: Libby Miller
// Date: 10/17/2023
// This pages sets up the UI, there are no pre or post conditions to this page
// inputs to this page are the users data for each field

// import necessary components
// import Navbar component
import Navbar from "@/components/navbar";
// import footer component 
import Footer from "@/components/footer";
import LightColorfulButton from "@/components/LightColorfulButton";

// creates createAccount page
export default function CreateAccount() {
  return (
    // create main page container
    <main className="w-full min-h-screen flex flex-col overflow-hidden bg-gray-100">
      {/* creates containers to hold navbar  */}
      <div className="py-6">
        <div className="container mx-auto">
          {/* create instance of navbar component  */}
          <Navbar />
        </div>
      </div>
      {/* create containers to hold form and page title  */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full sm:w-96 p-6 rounded-lg bg-white shadow-md">
          {/* create title for form  */}
          <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
          {/* create form element  */}
          <form className="space-y-4">
            <div className="mb-4">
            <label htmlFor="usertype" className="block text-sm font-medium text-gray-600">
              User Type
            </label>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
              <option value="instructor">Instructor</option>
              <option value="business">Business Admin</option>
            </select>
            </div>
            <div className="mb-4">
              {/* create label for name  */}
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              {/* create input for name  */}
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Full Name"
              />
            </div>
            {/* create label for institution  */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Institution
              </label>
              {/* create input for institution  */}
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Institution"
              />
            </div>
            {/* create label for email address  */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              {/* create input for email address  */}
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
            {/* create label for confirming password  */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              {/* create input for confirming password  */}
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Confirm Password"
              />
            </div>
            {/* create button for submitting form and creating account */}
            {/* this will need to be refactored when authentication is set up */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
            >
              Create Account
            </button>
            {/* <LightColorfulButton
              shadowColor="powderblue"
              title="Update Profile"
              onClick={handleSubmit}
            /> */}
          </form>
          {/* create link to login page if the user already has an account  */}
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
          {/* create link to single sign on  */}
          {/* need to be updated once SSO is set up */}
          <p className="mt-4 text-center text-gray-600">
            Sign in with {" "}
            <a href="/" className="text-blue-500 hover:underline">
              Google
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
