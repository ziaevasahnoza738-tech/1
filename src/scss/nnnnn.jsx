// import React,{useState} from "react";


// function About(params) {

//      const [yosh, setYosh] = useState(0);
//      const [ism, setIsm] = useState("");     


      
//     function Ikriment(params) {
//         setYosh((prew) => prew +1);

// }




//     return(
//         <>
//         <h1 className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm/6 font-semibold text-blck hover focus-visible:outline-2 focus-visible:outline-offset-2">{yosh}</h1>
//         <button className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 " onClick={Ikriment}>Click</button>

//         <h1>Mening ismim {ism}</h1>
//         <input type="text"onChange={(e) => setIsm(e.target.value)} />
     
        
//         </>
//     )





// }
// export default About;






// import react from "react";
// import { useState } from "react";
// import "./kkkkk.css";

//  function App() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="container  text-white rounded-3xl mt-5 container mx-auto px-10">
//       <div className="navbar bg-[#EDE9E6]">
        

//         <button
//           className="menu-btn"
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>
//       </div>

//       <div className="content">
//         {open && (
//           <div className="menu">
//             <ul className="flex flex-col gap-4 text-center bg-[#EDE9E6] rounded-lg p-4">
//               <li className="hover:text-cyan-400">🏠 Home</li>
//               <li className="hover:text-cyan-400" >👨‍💻 Profile</li>
//               <li className="hover:text-cyan-400">⚙️ Settings</li>
//               <li className="hover:text-cyan-400">☎️ Contact</li>
//               <li className="hover:text-cyan-400">🚪 Logout</li>
//               <li className="hover:text-cyan-400">⛓️ Silka</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   )};
// export default App;