import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Login() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-hidden bg-gray-100">
      <div className="py-6">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full sm:w-96 p-6 rounded-lg bg-white shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>
          <form className="space-y-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/create_account" className="text-blue-500 hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
      <div className="py-4 text-center text-sm text-gray-600">
        <Footer />
      </div>
    </main>
  );
}

