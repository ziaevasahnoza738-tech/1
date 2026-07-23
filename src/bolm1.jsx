import React, { useState, useEffect } from "react";
import { auth } from "./firebase"; 
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

function Bolm1() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' }); 
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert("Xatolik: " + error.message);
    }
  };


  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      
      {!user ? (
      
        <div style={{ border: "1px solid #ddd", padding: "30px", borderRadius: "10px", display: "inline-block", width: "300px" }}>
          <h3 style={{ marginBottom: "20px", color: "#333" }}>Hisobingizga kiring</h3>
          <button 
            onClick={handleGoogleLogin} 
            style={{ width: "100%", padding: "12px", fontSize: "16px", backgroundColor: "#4285F4", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
          >
            Akkauntni ulash
          </button>
        </div>
      ) : (

        <div style={{ border: "1px solid #28a745", padding: "20px", borderRadius: "10px", display: "inline-block", width: "300px", backgroundColor: "#f9f9f9" }}>
          <img src={user.photoURL} alt="Avatar" style={{ borderRadius: "50%", width: "70px", height: "70px", marginBottom: "10px" }} />
          <h4 style={{ margin: "5px 0" }}>{user.displayName}</h4>
          <p style={{ color: "#666", fontSize: "14px", margin: "5px 0 15px 0" }}>{user.email}</p>
          <button 
            onClick={handleLogout} 
            style={{ width: "100%", padding: "10px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Chiqish
          </button>
        </div>
      )}

    </div>
  );
}

export default Bolm1;
