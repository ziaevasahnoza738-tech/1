// import React from "react";

// function Bolm2({ cart }) {
//   return (
//   <>
//   <div className="">
//   <div className="karz">
//     <div className="bolm2-container">
//       <h1>Savat</h1>
     
//       {cart && cart.length > 0 ? (
//         cart.map((item, index) => (
//           <div className="sss" key={index}>
//             <div className="img-box">
//               <img src={item.img} alt={item.ism} />
//             </div>
//             <div className="card-info">
//               <h1 className="narx">{item.naex} so'm</h1>
//               <h1 className="bbbb">{item.ism}</h1>
//             </div>
//           </div>
         
//         ))
//       ) : (
//         <p>Savat bo'sh</p>
//       )}
//     </div>
//     </div>
//   </div>
//     </>
//   );
// }

// export default Bolm2;





// import React from "react";

// function Bolm2({ cart, onIncrease, onDecrease, onRemove }) {
//   const safeIncrease = onIncrease || (() => {});
//   const safeDecrease = onDecrease || (() => {});
//   const safeRemove = onRemove || (() => {});

//   return (
//     <div className="karz">
//       <div className="bolm2-container">
//         <h1>Savat</h1>

//         {cart && cart.length > 0 ? (
//           cart.map((item) => (
//             <div className="cart-card" key={item.id}>
//               <div className="cart-img-box">
//                 <img src={item.img} alt={item.ism} />
//               </div>

//               <div className="cart-info">
//                 <h1 className="bbbb">{item.ism}</h1>

//                 <div className="cart-middle">
//                   <div className="cart-row">
//                     <span className="cart-label">Narxi:</span>
//                     <h1 className="narx">{item.narx} so'm</h1>
//                   </div>

//                   <div className="cart-row">
//                     <span className="cart-label">Soni:</span>
//                     <div className="cart-qty">
//                       <input
//                         type="number"
//                         min="1"
//                         value={item.soni}
//                         onChange={(e) => {
//                           const val = Number(e.target.value);
//                           if (val > item.soni) safeIncrease(item.id);
//                           else if (val < item.soni && val >= 1) safeDecrease(item.id);
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <button className="cart-delete" onClick={() => safeRemove(item.id)}>
//                   O'chirish
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Savat bo'sh</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Bolm2;




// import React, { useState } from "react";
// import "./cart.css";

// function Bolm2() {
//   const [cart, setCart] = useState([
//     {
//       id: 1,
//       ism: "Olma yashil",
//       img: "https://via.placeholder.com/300",
//       narx: 15000,
//       soni: 2,
//     },
//     {
//       id: 2,
//       ism: "Banan",
//       img: "https://via.placeholder.com/300",
//       narx: 22000,
//       soni: 1,
//     },
//   ]);

//   const onIncrease = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, soni: item.soni + 1 } : item
//       )
//     );
//   };

//   const onDecrease = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id && item.soni > 1
//           ? { ...item, soni: item.soni - 1 }
//           : item
//       )
//     );
//   };

//   const onRemove = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="karz">
//       <div className="bolm2-container">
//         <h1>Savat</h1>

//         {cart && cart.length > 0 ? (
//           cart.map((item) => (
//             <div className="cart-card" key={item.id}>
//               <div className="cart-img-box">
//                 <img src={item.img} alt={item.ism} />
//               </div>

//               <div className="cart-info">
//                 <h1 className="bbbb">{item.ism}</h1>

//                 <div className="cart-middle">
//                   <div className="cart-row">
//                     <span className="cart-label">Narxi:</span>
//                     <h1 className="narx">{item.narx} so'm</h1>
//                   </div>

//                   <div className="cart-row">
//                     <span className="cart-label">Soni:</span>
//                     <div className="cart-qty">
//                       <input
//                         type="number"
//                         min="1"
//                         value={item.soni}
//                         onChange={(e) => {
//                           const val = Number(e.target.value);
//                           if (val > item.soni) onIncrease(item.id);
//                           else if (val < item.soni && val >= 1)
//                             onDecrease(item.id);
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   className="cart-delete"
//                   onClick={() => onRemove(item.id)}
//                 >
//                   O'chirish
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Savat bo'sh</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Bolm2;




// import React from "react";

// function Bolm2({ cart = [], setCart }) {
//   const onIncrease = (id) => {
//     if (!setCart) return;
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, soni: (item.soni || 1) + 1 } : item
//       )
//     );
//   };

//   const onDecrease = (id) => {
//     if (!setCart) return;
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id && (item.soni || 1) > 1
//           ? { ...item, soni: item.soni - 1 }
//           : item
//       )
//     );
//   };

//   const onRemove = (id) => {
//     if (!setCart) return;
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="karz">
//       <style>{
     
//       }</style>

//       <div className="bolm2-container">
//         <h1>Savat</h1>
//         {cart && cart.length > 0 ? (
//           cart.map((item, index) => (
//             <div className="cart-card" key={item.id ?? index}>
              
     
//   <div className="cart-left-block">
//     <div className="cart-img-box">
//       <img src={item.img || ""} alt={item.ism || "mahsulot"} />
//     </div>
//     <div className="cart-info">
//       <h1 className="bbbb">{item.ism || "Nomsiz mahsulot"}</h1>
//       <div className="cart-row">
//         <span className="cart-label">Narxi:</span>
//         <h1 className="narx">{item.narx || item.naex || 0} so'm</h1>
//       </div>
//     </div>
//   </div>
    
//  <div className="cart-right-block">
//    <div className="cart-row">
//      <span className="cart-label">Soni:</span>
//      <div className="cart-qty">
//        <input
//          type="number"
//          min="1"
//          value={item.soni || 1}
//          onChange={(e) => {
//            const val = Number(e.target.value);
//            if (val > (item.soni || 1)) onIncrease(item.id);
//            else if (val < (item.soni || 1) && val >= 1)
//              onDecrease(item.id);
//          }}
//        />
//      </div>
//                 </div>

//                 <button className="cart-delete" onClick={() => onRemove(item.id)}>
//                   O'chirish
//                 </button>
//               </div>

//             </div>
//           ))
//         ) : (
//           <p className="empty-cart">Savat bo'sh</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Bolm2;






import React from "react";

function Bolm2({ cart = [], setCart }) {
  const setQty = (id, val) => {
    if (!setCart || val < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, soni: val } : item))
    );
  };

  const onRemove = (id) => {
    if (!setCart) return;
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bolm2-container">
      <h1>Savat</h1>

      {cart.length > 0 ? (
        cart.map((item, index) => {
          const price = Number(item.narx || item.naex || 0);
          const qty = Number(item.soni || 1);
          const subtotal = price * qty;

          return (
            <div className="cart-card" key={item.id ?? index}>
              <div className="cart-left-block">
                <div className="cart-img-box">
                  <img src={item.img || ""} alt={item.ism} />
                </div>
                <div className="cart-info">
                  <h1 className="bbbb">{item.ism || "Nomsiz mahsulot"}</h1>
                  <div className="cart-row">
                    <span className="cart-label">Narxi:</span>
                    <h1 className="narx">{price} so'm</h1>
                  </div>
                </div>
              </div>

              <div className="cart-right-block">
                <div className="cart-row">
                  <span className="cart-label">Soni:</span>
                  <div className="cart-qty">
                    <input
                      type="number"
                      min="1"
                      className="qty-input"
                      value={qty}
                      onChange={(e) => setQty(item.id, Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="cart-subtotal">
                  Jami: <strong>{subtotal} so'm</strong>
                </div>

                <button className="cart-delete" onClick={() => onRemove(item.id)}>
                  O'chirish
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="empty-cart">Savat bo'sh</p>
      )}
    </div>
  );
}

export default Bolm2;