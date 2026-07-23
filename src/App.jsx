import React, { useState } from 'react';
import Section1 from './1bolm';
  import Section2 from './2bolm';
       import Section3 from './3bolm';
    import Section4 from './4bolm';
    // import Section5 from './5bolm';
    // import foto from './nnp.jpg'

export default function App() {
  const [active, setActive] = useState('1bolm');

  const navItems = [
      { id: '1bolm', label: 'Asosiy  ' },
       { id: '2bolm', label: 'Men haqimda' },
              { id: '3bolm', label: 'Loyihalar' },
      { id: '4bolm', label: 'Aloqa' },
      // { id: '5bolm', label: 'Men', }
  ];

  return (

    <>
    

      
  

   
<body className='nmt'>
  


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
        {active === '1bolm' && <Section1 />}
        {active === '2bolm' && <Section2 />}
        {active === '3bolm' && <Section3 />}
        {active === '4bolm' && <Section4 />}
        {/* {active === '5bolm' && <Section5 />} */}
      </div>
    </div>
    
    </body>







      
  
    </>

  
  );
};
