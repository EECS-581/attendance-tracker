import { useState, useEffect } from 'react';
import { useWeb3Context } from '@/contexts/web3Context';

// import necessary components
// import Navbar component 
import Navbar from "@/components/navbar";
// import Footer
import Footer from "@/components/footer";
import LightColorfulButton from "@/components/LightColorfulButton";

// create the about page
export default function Account() {

  const { createWallet, setUserWallet, getUserData, updateUserData } = useWeb3Context(); // Use the Web3Context

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data from the blockchain using the Web3Context
        const data = await getUserData();
        setUserData(data);
      } catch (error) {
        // Handle error
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // const handleSubmit = async (updatedUserData) => {
  //   try {
  //     // Update user data on the blockchain using the Web3Context
  //     await updateUserData(updatedUserData);
  //     // Update local state or perform other actions if necessary
  //   } catch (error) {
  //     // Handle error
  //     console.error('Error updating user data:', error);
  //   }
  // };

  // State to manage form input values
  const [userData, setUserData] = useState({
    usertype: '',
    username: '',
    password: '',
    email: '',
    institution: '',
    profilePicture: null, // Assuming profilePicture is a file
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserData({
      ...userData,
      profilePicture: file,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Call the updateUserData method from Web3Context to update user data
      await updateUserData(userData);
      // Optionally, perform any additional actions after successful data update
      console.log('User data updated successfully');
    } catch (error) {
      // Handle error if data update fails
      console.error('Error updating user data:', error);
    }
  };

  return (
    // create a main page container
    <main className="w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
        {/* This adds the navbar component to the page */}
          <Navbar />
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        {/* creates a header for the page */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center my-4">Account Manager</h1>
        {/* creates a subheader for the page */}
        <h2 className="text-xl md:text-2xl text-gray-700 text-center my-4">User Profile</h2>
        
        {/* {userData.profilePicture && ( */}
            <div className="mb-4">
              <img
                // src={`/images/${userData.profilePicture}`} // Update with the actual image path
                src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                alt="Current Profile Picture"
                className="max-w-xs max-h-40 mx-auto"
              />
            </div>
          {/* )} */}
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="usertype" className="block text-gray-700 text-sm font-bold mb-2">
              User type
            </label>
            <select
              id="usertype"
              name="usertype"
              value={userData.usertype}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            >
              <option value="instructor">Instructor</option>
              <option value="business">Business Admin</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="institution" className="block text-gray-700 text-sm font-bold mb-2">
              Institution
            </label>
            <input
              type="institution"
              id="institution"
              name="institution"
              value={userData.institution}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profilePicture" className="block text-gray-700 text-sm font-bold mb-2">
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              value={userData.profilePicture}
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mt-6 text-center">
            <LightColorfulButton
              shadowColor="powderblue"
              title="Update Profile"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      <div className="py-4 text-center text-sm text-gray-600">
        {/* create an instance of the footer  */}
        <Footer /> 
      </div>
    </main>   
  );
}; 
