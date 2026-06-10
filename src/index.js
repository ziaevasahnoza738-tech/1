import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './scss/app.css'
import { Routes,Route, BrowserRouter }from "react-router-dom"



import './bek'
// import './scss/aaaa.css'

// import Sainap from './Sainap'
// import LOGIN from './LOGIN'
import App from './App'
import Navbar from './Navbar'
// import './scss/Home'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <BrowserRouter>
    {/* <App/> */}
    {/* <Nav.uzum/> */}
    {/* <Nav.uzum/> */}
  
    {/* <Sainap/> */}
    {/* <Navbar/> */}
    <Routes>
        {/* <Route path="/" element={<Sainap/>}/>
      <Route path="/login" element={<LOGIN/>}/>
       <Route path="/Homeee" element={<Home/>}/> */}

      <Route path="/" element={<App/>}/>  
       <Route path="/Nav"  element={<Navbar/>}/>  





    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
