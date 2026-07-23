
import React from 'react';
import bbb from './ddd.jpg';

export default function Section1() {
  return (
    <>
      <div className="cart">
        
        <div className="text-side">
     <h1 className="slide-all">Men ismim</h1>
          <h1 className="vvvv slide-all">Ulug'bek Kadirov</h1>
          
          <div className='ghj'>
  <h1 className="slide-all">:HTML</h1>
<h1 className="slide-all">:CSS</h1>   
<h1 className="slide-all">:JavaScript</h1>             
  <h1 className="slide-all">:React</h1>  
          </div>
        </div>

        <div className="image-side">
          <img src={bbb} alt="Ulug'bek Kadirov" className="bbb slide-image rounded-full" 
          
          />
        </div>

      </div>

      <main>
        buyrga rasm qo'ylad
        
      </main>
    </>
  );
}

