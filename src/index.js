// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import asosiy from './asosiy'
// import './app.css';     
// import Uzumarker from'./rayhon market'
// import'./uzm.css'





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>

//     <Uzumarker/>
  

//   </React.StrictMode>
  
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Uzumarker from './rayhon market';
import './uzm.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>

    <BrowserRouter>
      <Uzumarker />

    </BrowserRouter>
  </React.StrictMode>
);
