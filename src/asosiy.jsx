import React, { useState } from 'react';
import as1 from './bolm1';
  import as2 from './bolm2';
       import as3 from './bolm3';
    import as4 from './bolm4';


function asosiy() {




      const navItems = [
      { id: 'bolm1', label: 'Menyu  ' },
       { id: 'bolm2', label: 'tavarlar' },
              { id: 'bolm3', label: 'manzil' },
      { id: 'bolm4', label: 'savat' },

  ];
    return(
    <>
    





     <div style={{ fontFamily: 'sans-serif' }}>
  <nav style={{ display: 'flex', gap: 16, padding: '20px 40px', background: '#1e1e2e', position: 'sticky' }}>
      {navItems.map(item => (
          <button
       key={item.id}     
       onClick={() => setActive(item.id)}
            style={{
         background:  '#7c3aed',
              color: '#fff',
            padding: '12px 25px',
           borderRadius: 8,           cursor: 'pointer',
        
            }}
          >

         {item.label}
          </button>





      
        ))}
      </nav>
      


      
    
  
      <div style={{ padding: 60 }}>
        {active === 'bolm1' && <Section1 />}
        {active === 'bolm2' && <Section2 />}
        {active === 'bolm3' && <Section3 />}
        {active === 'bolm4' && <Section4 />}
        {/* {active === 'bolm5' && <Section5 />} */}
      </div>
    </div>
    











  
      {/* <div style={{ padding: 60 }}>
        {active === 'bolm1' && <as1 />}
        {active === 'bolm2' && <as2 />}
        {active === 'bolm3' && <as3 />}
        {active === 'bolm4' && <as4 />}
    
      </div>
  */}



    
    </>
    


)
    
}