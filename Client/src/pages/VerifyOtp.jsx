// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';

// const VerifyOtp = () => {
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [user, setUser] = useState(null);  // Store user data fetched from backend
//   const navigate = useNavigate();

//   // Fetch user information on component mount
//   useEffect(() => {
//     const fetchUserInformation = async () => {
//       try {
//         const response = await axios.get("http://localhost:1000/api/v1/get-user-information", {
//           headers: {
//             id: localStorage.getItem("id"),  // Pass user ID from localStorage
//             Authorization: `Bearer ${localStorage.getItem("token")}`,  // Pass token for authentication
//           },
//         });
//         setUser(response.data);  // Set user data from the response
//         console.log(response.data); // Log the user data
//       } catch (error) {
//         toast.error("Failed to fetch user information.");
//       }
//     };

//     fetchUserInformation();
//   }, []);  // Only run on component mount

//   // Handle OTP input change
//   const handleInputChange = (index, value) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//   };

//   // Combine OTP digits into one string and convert to integer
//   const combinedOtp = otp.join(""); // Combine OTP digits into a string
//   const combinedOtpInt = parseInt(combinedOtp, 10);  // Convert to integer for backend comparison

//   // Log OTP for debugging purposes
//   console.log("Combined OTP (string):", combinedOtp);
//   console.log("Combined OTP (integer):", combinedOtpInt);

//   // Handle OTP form submission
//   const handleOnSubmit = async (e) => {
//   e.preventDefault();

//   // Check if the OTP has 6 digits
//   if (combinedOtp.length !== 6) {
//     toast.error("OTP must be 6 digits long!");
//     return;
//   }

//   // Check if user data exists
//   if (!user) {
//     toast.error("User data not available");
//     return;
//   }

//   console.log("Email:", user.email); // Log email
//   console.log("OTP:", combinedOtp);  // Log OTP

//   // Ensure the OTP is an integer before sending
//   const combinedOtpInt = parseInt(combinedOtp, 10); // Convert to integer

//   // Verify the data being sent in the request
//   const dataOtp = {
//     email: user.email,  // Use email fetched from the backend
//     combinedOtp: combinedOtpInt, // Send OTP as an integer
//   };

//   console.log("Sending Request Body:", dataOtp); // Log the request data

//   try {
//     const response = await axios.post("http://localhost:1000/api/v1/verify-otp", dataOtp, {
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.getItem("token")}`, // Pass token for authentication
//       },
//     });

//     if (response.data.success) {
//       toast.success(response.data.message);
//       navigate("/");  // Redirect to home page or dashboard
//     } else {
//       toast.error(response.data.message);
//     }
//   } catch (error) {
//     toast.error("An error occurred during OTP verification");
//     console.error(error);
//   }
// };


//   return (
//     <div className="relative pt-[15vh] flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
//       <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto max-w-lg rounded-2xl">
//         <div className="max-auto flex w-full max-w-md flex-col space-y-16">
//           <div className="flex flex-col items-center justify-center text-center space-y-2">
//             <div className="font-semibold text-3xl">
//               Email Verification
//             </div>

//             {user ? (
//               <div className="flex flex-row text-sm font-medium text-gray-400">
//                 We have sent a code to your email {user.email}
//               </div>
//             ) : (
//               <div className="text-sm font-medium text-gray-400">Loading user data...</div>
//             )}
//           </div>

//           <div>
//             <form onSubmit={handleOnSubmit}>
//               <div className="flex justify-center items-center space-x-2">
//                 {otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     type="text"
//                     value={digit}
//                     maxLength={1}
//                     onChange={(e) => handleInputChange(index, e.target.value)}
//                     className="w-12 h-12 mx-2 border border-gray-300 rounded text-center text-2xl"
//                   />
//                 ))}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 bg-blue-600 pt-5 rounded-xl mt-6 text-white font-semibold hover:bg-blue-500 active:scale-90 transition-all duration-300"
//               >
//                 Verify OTP
//               </button>
//             </form>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;
