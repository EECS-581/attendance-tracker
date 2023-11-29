// Code Requirement 37.1 - About Page UI - View organization and manage coupons buttons
// This code creates the About Page for the website
// Programmers name: Libby Miller
// Date: 09/26/2023
// Updated: 10/17/2023, Requirement 36.7 - CSS styling version 1 - added tailwind css classes
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import necessary components
// import Navbar component 
// import Navbar from "@/components/navbar";
// // import Footer
// import Footer from "@/components/footer";

// // create the about page
// export default function About() {
//   return (
//     // create a main page container
//     <main className="w-full overflow-hidden">
//       <div className="py-6">
//         <div className="container mx-auto">
//       {/* <div className={`sm:px-16 px-6 flex justify-center items-center`}> */}
//         {/* <div className={`xl:max-w-[2280px] w-full`}> */}
//         {/* This adds the navbar component to the page */}
//           <Navbar />
//         </div>
//       </div>
//       <div className="max-w-4xl mx-auto p-6">
//         {/* creates a header for the page */}
//         <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center my-4">About Us</h1>
//         {/* creates a subheader for the page */}
//         <h2 className="text-xl md:text-2xl text-gray-700 text-center my-4">Attend This</h2>
//         <div className="text-center mt-8">
//           {/* creates a container to hold a heading and an image or graphic */}
//           <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Streamlining Student Engagement in Education</h3>
//           <img
//             src=""
//             alt=""
//             className="mx-auto mt-4 rounded-lg"
//           />
//         </div>
 
//         {/* creates a container to hold the text explaining the product */}
//         <div className="mt-8">
//           <p className="text-gray-700 text-center my-4">Attend This is an attendence reward tracker that enables students to collect tokens and rewards for class attendence, to incentivize greater participation and engagement in schools and universities.</p>
//           <p className="text-gray-700 text-center my-4">Attend This provides instructors with powerful insights to help manage attendence expectations and encourage participation.</p>
//           <p className="text-gray-700 text-center my-4">Attend This gives businesses the opportunity to engage with local educational institutiions by incentivizing attendence with a reward system.</p>
//         </div>
//       </div>
//       {/* Mission Statement/Values Section */}
//       <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center my-4">Our Mission and Values</h2>
//         <p className="text-gray-700 text-center my-4">
//           At Attend This, our mission is to revolutionize student engagement in education by providing a platform that encourages attendance and active participation. Our core values include [Value 1], [Value 2], and [Value 3].
//         </p>
//         {/* Testimonials Section */}
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center my-4">What Our Users Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <p className="text-gray-700 mb-2">"Attend This has transformed my classroom experience. The reward system is fantastic, and my students love it!"</p>
//             <p className="text-gray-500 font-semibold">- Jane Doe, High School Teacher</p>
//           </div>
//           {/* Add more testimonials as needed */}
//         </div>
//         {/* Motivation and Purpose Section */}
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center my-4">Our Motivation and Purpose</h2>
//         <p className="text-gray-700 text-center my-4">
//           Attend This was born out of a passion for enhancing educational experiences. We believe that by rewarding attendance, we can create a positive and motivating environment for students, educators, and institutions alike.
//         </p>
//         {/* Product Offering Section */}
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center my-4">What Attend This Offers</h2>
//         <ul className="list-disc text-gray-700 ml-8">
//           <li>Effortless attendance tracking for educators.</li>
//           <li>Engaging reward system for students.</li>
//           <li>Insightful analytics for institutions.</li>
//           <li>Opportunities for businesses to connect with local education.</li>
//         </ul>
//         {/* Application and Website Differences Section */}
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center my-4">Differences Between the Application and Website</h2>
//         <p className="text-gray-700 text-center my-4">
//           While our website serves as the gateway for information and access, the application is the hub for real-time attendance tracking, reward distribution, and valuable insights. The website complements the application by providing additional resources, updates, and support.
//         </p>
//       <div className="py-4 text-center text-sm text-gray-600">
//         {/* create an instance of the footer  */}
//         <Footer /> 
//       </div>
//     </main>   
//   );
// };

import Navbar from "@/components/navbar";
import LightColorfulButton from "@/components/LightColorfulButton";
import Footer from "@/components/footer";

export default function About() {
  return (
    <main className="w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center my-4">About Us</h1>
        <h2 className="text-xl md:text-2xl text-gray-700 text-center my-4">Attend This</h2>
        <div className="text-center mt-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Streamlining Student Engagement in Education</h3>
          <img
            src=""
            alt=""
            className="mx-auto mt-4 rounded-lg"
          />
        </div>

        {/* Mission Statement/Values Section */}
        <div className="bg-powderblue mt-8 p-8 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-4">Our Mission and Values</h2>
          <p className="text-gray-700 text-center">
            At Attend This, our mission is to revolutionize student engagement in education by providing a platform that encourages attendance and active participation. Our core values include educational empowerment, student success, and community engagement.
          </p>
        </div>

{/* Testimonials Section */}
<div className="mt-8">
  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-4">What Our Users Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Testimonial 1 */}
    <div className="bg-pink p-8 rounded-lg shadow-md flex flex-col items-center justify-between">
      <p className="text-gray-700 mb-2">"Attend This has transformed my classroom experience. The reward system is fantastic, and my students love it!"</p>
      <div className="flex items-center justify-center mb-2">
        <img
          src="../../assets/teacher.png"
          alt="Testimonial Icon"
          className="w-14 h-14 mb-2 rounded-lg"
        />        
        <p className="pl-2 text-sm text-gray-500 font-semibold">- Jane Doe, High School Teacher</p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-pink p-8 rounded-lg shadow-md flex flex-col items-center justify-between">
      <p className="text-gray-700 mb-2">"I've seen a significant increase in attendance since implementing Attend This in my classes. It's a game-changer!"</p>
      <div className="flex items-center justify-center mb-2">
        <img
          src="../../assets/student.png"
          alt="Testimonial Icon"
          className="w-14 h-14 mb-2 rounded-lg"
        />        
        <p className="pl-2 text-sm text-gray-500 font-semibold">- John Smith, College Professor</p>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-pink p-8 rounded-lg shadow-md flex flex-col items-center justify-between">
      <p className="text-gray-700 mb-2">"The analytics provided by Attend This helped us identify trends and improve our overall attendance strategy. Highly recommended!"</p>
      <div className="flex items-center justify-center mb-2">
        <img
          src="../../assets/buisness.png"
          alt="Testimonial Icon"
          className="w-14 h-14 mb-2 rounded-lg"
        />        
        <p className="pl-2 text-sm text-gray-500 font-semibold">- Amanda Johnson, School Administrator</p>
      </div>
    </div>
  </div>
</div>


        {/* Motivation and Purpose Section */}
        <div className="mt-8 bg-powderblue p-8 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-4">Our Motivation and Purpose</h2>
          <p className="text-gray-700 text-center">
            Attend This was born out of a passion for enhancing educational experiences. We believe that by rewarding attendance, we can create a positive and motivating environment for students, educators, and institutions alike.
          </p>
        </div>

        {/* Product Offering Section */}
        <div className="mt-8 bg-pink p-8 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-4">What Attend This Offers</h2>
          <ul className="list-disc text-gray-700 ml-8">
            <li>Effortless attendance tracking for educators.</li>
            <li>Engaging reward system for students.</li>
            <li>Insightful analytics for institutions.</li>
            <li>Opportunities for businesses to connect with local education.</li>
          </ul>
        </div>

        {/* Application and Website Differences Section */}
        <div className="mt-8 bg-powderblue p-8 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-4">Website or Application?</h2>
          <p className="text-gray-700 text-center">
            While our website serves as the gateway for information and access for business administrators and instructors, the application is the hub for real-time attendance tracking, reward distribution, and valuable insights. The website complements the application by providing additional resources, updates, and support.
          </p>
        </div>
        <div className="mt-8 p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-4">Give us a try</h2>
          <p className="text-gray-700 text-center">
            <LightColorfulButton 
              shadowColor="pink"
              title="Sign up today!"
              link="/create_account"
            />
          </p>
        </div>
      </div>
      <div className="py-4 text-center text-sm text-gray-600">
        <Footer />
      </div>
    </main>
  );
};
