import React from "react";
import { Link } from "react-router-dom";
function Login() {
    return(
        <>
        {/* <Link to="LOGIN"></Link> */}
        {/* <Link to="Sainap"></Link> */}




        <div className="div">


            <input type="text"placeholder="Manzl" />

            <input type="namber" placeholder="Tel raqam"/>

            <input type="text"  placeholder="Ism"/>

            <input type="text" placeholder="Fam"/>

         <button className="ddd">Kirish</button>

        
        </div>
        <div className="kkkkk">
            <p>Siz Sain app ga kirib ro'yhatan o'tshingiz kerak</p>

        <Link to="/"><a href="Sain app" className="www">Sain app</a></Link>
        </div>

        </>




    )
    
}
export default Login;


