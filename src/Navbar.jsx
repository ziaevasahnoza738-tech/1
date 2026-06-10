import { useState } from 'react';


function Navbar() {
  const [showBox, setShowBox] = useState(false);

  return (
    <div>


      <button onClick={() => setShowBox(!showBox)} className="ffff">
        <i className="fa-brands fa-codepen"></i> Kiris
      </button>



      {showBox && (
        <div className='boxs'>
          <h3>rtgaergretmaertq</h3>
        </div>
      )}
    </div>
  );
}

export default Navbar;