// // import React from "react";
// // import { Link } from "react-router-dom";

// // function Sainap() {
// //     return(
// //         <>

// //         <div className="BEK">
           
            


// //             <input type="email" value="Email"/>

// //             <input type="password"value="Parol" />
   



        

            
           
// //              <Link to="LOGIN" ><h1 className="ddd">Keyingis</h1></Link>


// //         </div>


        
// //         </>

// //     )
    
// // }
// // export default Sainap;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   // 📥 Ma'lumotlarni olish
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);


//   // 🔍 Search filter
//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(search.toLowerCase()) ||
//       user.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       {/* 🔍 Search */}
//       <div className="search-box" style={{ textAlign: "center", margin: "20px" }}>
//         <input
//           type="text"
//           placeholder="Search user..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{ padding: "10px", width: "250px" }}
//         />
//       </div>

//       {/* ⏳ Loading */}
//       {loading ? (
//         <h2 style={{ textAlign: "center" }}>Loading...</h2>
//       ) : (
//         <div
//           className="container"
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "20px",
//             justifyContent: "center",
//           }}
//         >
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user) => (
//               <div
//                 className="card"
//                 key={user.id}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "15px",
//                   width: "200px",
//                   borderRadius: "10px",
//                   textAlign: "center",
//                 }}
//               >
//                 <div
//                   className="avatar"
//                   style={{
//                     width: "50px",
//                     height: "50px",
//                     borderRadius: "50%",
//                     background: "#007bff",
//                     color: "#fff",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     margin: "0 auto 10px",
//                     fontSize: "20px",
//                   }}
//                 >
//                   {user.name.charAt(0)}
//                 </div>

//                 <h3>{user.name}</h3>
//                 <p>{user.email}</p>
//                 <span>{user.address.city}</span>

              
//               </div>
//             ))
//           ) : (
//             <h2 style={{ textAlign: "center" }}>No users found</h2>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Users;