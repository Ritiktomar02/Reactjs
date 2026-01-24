// import React, { useState } from "react";

// function App() {
//   const [highlightForm, setHighlightForm] = useState(false);
//   const addDarkMode = () => {
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   };

//   const removeDarkMode = () => {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   };

//   // Restore theme on reload
//   if (localStorage.getItem("theme") === "dark") {
//     document.documentElement.classList.add("dark");
//   }

//   const [firsName,setFirstName]=useState("");
//   const [lastName,setLastName]=useState("");
//   const [email,setEmail]=useState("");
//   const [contact,setContact]=useState("");
//   const [gender,setGender]=useState("");
//   const [file,setFile]=useState("");
//   const [about,setAbout]=useState("");
//   const [errors, setErrors] = useState({});


//  const submitHandler = (e) => {
//   e.preventDefault();

//   const newErrors = {};

//   if (!firsName.trim()) {
//     newErrors.firstName = "First name is required";
//   }

//   if (!lastName.trim()) {
//     newErrors.lastName = "Last name is required";
//   }

//   if (!email.trim()) {
//     newErrors.email = "Email is required";
//   } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//     newErrors.email = "Invalid email format";
//   }

//   if (!contact.trim()) {
//     newErrors.contact = "Contact number is required";
//   } else if (!/^\d{10}$/.test(contact)) {
//     newErrors.contact = "Enter a valid 10-digit number";
//   }

//   if (!gender) {
//     newErrors.gender = "Please select gender";
//   }

//   // ✅ File validation
//   if (!file) {
//     newErrors.file = "Please upload resume";
//   } else {
//     const allowedTypes = [
//       "application/pdf",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     ];
//     const maxSize = 2 * 1024 * 1024;

//     if (!allowedTypes.includes(file.type)) {
//       newErrors.file = "Only PDF, DOC, or DOCX files are allowed";
//     } else if (file.size > maxSize) {
//       newErrors.file = "File size must be less than 2 MB";
//     }
//   }

//   if (!about.trim()) {
//     newErrors.about = "About section is required";
//   }

//   // 🔥 THE MOST IMPORTANT FIX
//   if (Object.keys(newErrors).length > 0) {
//     setErrors(newErrors);
//     console.log(newErrors);
//     return;
//   }

//   setErrors({});
//   alert("Form submitted successfully!");
// };

//   return (
//     <div
//       className="min-h-screen bg-gray-100 dark:bg-gray-900
//                  flex justify-center items-start py-6 px-4 transition-colors"
//     >
//       <div className="fixed top-4 right-4 z-50 flex gap-2">
//         <button
//           onClick={addDarkMode}
//           className="px-3 py-1 rounded-md text-sm
//                      bg-gray-200 dark:bg-gray-700
//                      text-gray-800 dark:text-gray-200
//                      hover:scale-105 transition"
//         >
//           Dark
//         </button>

//         <button
//           onClick={removeDarkMode}
//           className="px-3 py-1 rounded-md text-sm
//                      bg-gray-200 dark:bg-gray-700
//                      text-gray-800 dark:text-gray-200
//                      hover:scale-105 transition"
//         >
//           Light
//         </button>
//         <button
//           onClick={() => setHighlightForm(!highlightForm)}
//           className="px-3 py-1 rounded-md text-sm
//              bg-blue-200 dark:bg-blue-700
//              text-blue-900 dark:text-blue-100
//              hover:scale-105 transition"
//         >
//           Highlight Form
//         </button>
//       </div>

//       <div
//         className={`w-full max-w-md sm:max-w-lg
//               bg-white dark:bg-gray-800
//               rounded-2xl shadow-lg p-6 sm:p-8
//               transition-all duration-300
//               ${highlightForm ? "ring-4 ring-green-400 scale-[1.02]" : ""}`}
//       >
//         <h1
//           className="text-xl sm:text-2xl font-semibold
//                      text-green-700 dark:text-green-400
//                      text-center mb-6"
//         >
//           Form in React
//         </h1>

//         <form className="space-y-4" onSubmit={submitHandler}>
//           {/* First Name */}
//           <div>
//             <label
//               htmlFor="firstName"
//               className="block text-sm font-semibold
//                          text-gray-600 dark:text-gray-300"
//             >
//               First Name*
//             </label>
//             <input
//               id="firstName"
//               type="text"
//               onChange={(e)=>setFirstName(e.target.value)}
//               placeholder="Enter First Name"
//               className="mt-1 w-full rounded border border-gray-300
//                          dark:border-gray-600 bg-white dark:bg-gray-700
//                          px-3 py-2 text-sm text-gray-900 dark:text-white
//                          focus:outline-none focus:ring-2 focus:ring-green-400 focus:"
//               required
//             />
//           </div>

//           {/* Last Name */}
//           <div>
//             <label
//               htmlFor="lastName"
//               className="block text-sm font-semibold
//                          text-gray-600 dark:text-gray-300"
//             >
//               Last Name*
//             </label>
//             <input
//               id="lastName"
//               type="text"
//               onChange={(e)=>setLastName(e.target.value)}
//               placeholder="Enter Last Name"
//               className="mt-1 w-full rounded border border-gray-300
//                          dark:border-gray-600 bg-white dark:bg-gray-700
//                          px-3 py-2 text-sm text-gray-900 dark:text-white
//                          focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold
//                          text-gray-600 dark:text-gray-300"
//             >
//               Email*
//             </label>
//             <input
//               id="email"
//               type="email"
//               onChange={(e)=>setEmail(e.target.value)}
//               placeholder="Enter Email"
//               className="mt-1 w-full rounded border border-gray-300
//                          dark:border-gray-600 bg-white dark:bg-gray-700
//                          px-3 py-2 text-sm text-gray-900 dark:text-white
//                          focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             />
//           </div>

//           {/* Contact */}
//           <div>
//             <label
//               htmlFor="contact"
//               className="block text-sm font-semibold
//                          text-gray-600 dark:text-gray-300"
//             >
//               Contact*
//             </label>
//             <input
//               id="contact"
//               type="tel"
//               onChange={(e)=>setContact(e.target.value)}
//               placeholder="Enter Mobile Number"
//               className="mt-1 w-full rounded border border-gray-300
//                          dark:border-gray-600 bg-white dark:bg-gray-700
//                          px-3 py-2 text-sm text-gray-900 dark:text-white
//                          focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             />
//           </div>

//           {/* Gender */}
//           <div>
//             <label
//               className="block text-sm font-semibold
//                          text-gray-600 dark:text-gray-300 mb-1"
//             >
//               Gender*
//             </label>
//             <div className="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-300">
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="gender" value="male" onChange={(e)=>setGender(e.target.value)} /> Male
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="gender" onChange={(e)=>setGender(e.target.value) }/> Female
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="gender" onChange={(e)=>setGender(e.target.value)}/> Other
//               </label>
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="file"
//               className="block text-sm font-semibold
//                          text-gray-600 dark:text-gray-300"
//             >
//               Upload Resume*
//             </label>
//             <input
//               id="file"
//               type="file"
//               onChange={(e)=> setFile(e.target.files[0])}
//               placeholder="Enter Upload File"
//               className="mt-1 w-full rounded border border-gray-300
//                          dark:border-gray-600 bg-white dark:bg-gray-700
//                          px-3 py-2 text-sm text-gray-900 dark:text-white
//                          focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             />
//           </div>

//           {/* About */}
//           <div>
//             <label
//               htmlFor="about"
//               className="block text-sm font-semibold
//                          text-gray-600 dark:text-gray-300"
//             >
//               About
//             </label>
//             <textarea
//               id="about"
//               placeholder="About yourself"
//               onChange={(e)=>{setAbout(e.target.value)}}
//               className="mt-1 w-full h-28 resize-none rounded
//                          border border-gray-300 dark:border-gray-600
//                          bg-white dark:bg-gray-700
//                          px-3 py-2 text-sm text-gray-900 dark:text-white
//                          focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center gap-4 pt-4">
//             <button
//               type="reset"
//               className="px-6 py-2 rounded-lg bg-gray-400
//                          hover:bg-gray-500 transition text-white"
//             >
//               Reset
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 rounded-lg bg-green-500
//                          hover:bg-green-600 transition text-white"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react'

const App = () => {

  document.cookie("")

  return (
    <div>
      
    </div>
  )
}

export default App
