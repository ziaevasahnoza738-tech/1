

// // import { useEffect, useState } from "react";
// // import axios from 'axios';
// // import logo from './yui.png'; 

// // function Uzummarket() {
// //   const [showBox, setShowBox] = useState(false);
// //   const [search, setSearch] = useState("");
// //   const [products, setProducts] = useState([]);

// //   const [savat, setSavat] = useState(() => {
// //     const saqlangan = localStorage.getItem("savat");
// //     return saqlangan ? JSON.parse(saqlangan) : [];
// //   });

// //   const [layklar, setLayklar] = useState(() => {
// //     const saqlangan = localStorage.getItem("layklar");
// //     return saqlangan ? JSON.parse(saqlangan) : [];
// //   });

// //   useEffect(() => {
// //     localStorage.setItem("savat", JSON.stringify(savat));
// //   }, [savat]);

// //   useEffect(() => {
// //     localStorage.setItem("layklar", JSON.stringify(layklar));
// //   }, [layklar]);

// //   const savatgaQoshish = (mahsulot) => {
// //     setSavat([...savat, mahsulot]);
// //   };

// //   const laykBosish = (mahsulot) => {
// //     const borMii = layklar.some((item) => item.id === mahsulot.id);
// //     if (borMii) {
// //       setLayklar(layklar.filter((item) => item.id !== mahsulot.id));
// //     } else {
// //       setLayklar([...layklar, mahsulot]);
// //     }
// //   };


// //   useEffect(() => {
// //     const endpointName = "products"; 

// //     axios.get(`https://6a0ad25221e445625696a932.mockapi.io/app/1x/${endpointName}`)
// //       .then((res) => {
// //         console.log("KELGAN DATA:", res.data); // shu qator qo'shildi
// //         setProducts(res.data);
// //       })
// //       .catch((error) => {
// //         console.log("XATOLIK:", error); // shu qator qo'shildi
// //       });
// //   }, []);

// //   const filteredProducts = products.filter(
// //     (item) => item.ism && item.ism.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div className="main-layout">

// //       <div className={`boxs ${showBox ? 'open' : ''}`}>
// //         <div className="boxs-content">
// //           <h3>Savat / Ma'lumotlar oynasi</h3>
// //           <button className="close-btn" onClick={() => setShowBox(false)}>Yopish</button>
// //         </div>
// //       </div>

// //       {showBox && <div className="backdrop" onClick={() => setShowBox(false)}></div>}

// //       <div className="uuu">
// //         <nav className="qqq">
// //           <div className="logo-area">
// //             <img className="eee" src={logo} alt="Rayhon Market" />
// //           </div>

// //           <button onClick={() => setShowBox(!showBox)} className="ffff">
// //             <i className="fa-brands fa-codepen"></i>Bosing
// //           </button>

// //           <input
// //             className="inp"
// //             type="text"
// //             placeholder="Nima qidiryabsiz"
// //             value={search}
// //             onChange={(e) => setSearch(e.target.value)}
// //           />

// //           <div className="vvv">
// //             <button className="nav-icon-btn"><i className="fa-solid fa-user"></i></button>
// //             <button className="nav-icon-btn"><i className="fa-solid fa-heart"></i></button>
// //             <button className="nav-icon-btn"><i className="fa-solid fa-cart-shopping"></i></button>
// //           </div>
// //         </nav>

// //         <div className="APP">
// //           {filteredProducts.map((item) => (
// //             <div className="sss" key={item.id}>
// //               <div className="heart-pos" onClick={() => laykBosish(item)}>
// //                 <i className={layklar.some(l => l.id === item.id) ? "fa-solid fa-heart active-heart" : "fa-regular fa-heart"}></i>
// //               </div>
// //               <img src={item.img} alt={item.ism} />
// //               <h1 className="narx">{item.narx} so'm</h1>
// //               <h1 className="old">{item.old} so'm</h1>
// //               <h1 className="bbbb">{item.ism}</h1>
// //               <button className="fff" onClick={() => savatgaQoshish(item)}>Sotib olish</button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="alll">
// //         <footer>
// //           <div>
// //             <h1>Manzil: Toshkent</h1>
// //             <h1>Tel: 77 777 77 77</h1>
// //             <h1>Insta: _bobomurod_08_23_</h1>
// //           </div>
// //           <div>
// //             <h1>Ism: Bobomurod</h1>
// //             <h1>Fam: Tashtanov</h1>
// //             <h1>Uy manzil: Andijon Qo'rg'ontepa</h1>
// //           </div>
// //           <div>
// //             <h1>Telegram: @tashtanov08</h1>
// //             <h1>Yutub: @_bobomurod_08_23_</h1>
// //             <h1>Ishlab chiqarish: Uzum market</h1>
// //           </div>
// //         </footer>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Uzummarket;













// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// import foo from "./ooo.png"
// function Uzummarket() {
//   const [showBox, setShowBox] = useState(false);
//   const [search, setSearch] = useState("");
//   const [users, setUsers] = useState([]); 
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("https://6a4f1cfae785c9ef536d5c53.mockapi.io/user/user") 
//       .then((res) => { 
//         setUsers(res.data); 
//         setLoading(false);
//       })
//       .catch((error) => { 
//         console.log("Xatolik:", error); 
//         setLoading(false);
//       });
//   }, []);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.ism && user.ism.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <div className="uuu">
//         <nav className="qqq">
//           <img src={foo} alt="" className="ytr" width="120px"/>
          
//           <button onClick={() => setShowBox(!showBox)} className="ffff">
//             <i className="fa-brands fa-codepen"></i> Katalog
//           </button>

//           {showBox && (
//             <div className='boxs-modal'>
//       <div><p>1. Asosiy Kategoriyalar (Eng muhimlari)

// Meva va Sabzavotlar
// Go‘sht va Baliq
// Sut mahsulotlari (sut, yogurt, pishloq, qatiq va h.k.)
// Non va Non mahsulotlari
// Ichimliklar (suv, sharbat, gazli ichimliklar, choy, qahva)
// Shirinliklar va Snacks
// Yog‘lar, Soslar va Ziravorlar
// Makaron, Guruch, Don mahsulotlari
// Konserva va Tayyor ovqatlar
// Gigiena va Uy-ro‘zg‘or (sovun, tish pastasi, tozalovchi vositalar)
// Bolalar ovqatlari
// Muzlatilgan mahsulotlar
// Chegirmalar va Aksiyalar (alohida bo‘lim)</p></div>
// <div><p>2. Har bir mahsulot uchun quyidagilarni qo‘shing:

// Mahsulot nomi (masalan: “Uzum (qizil) 1 kg”)
// Og‘irligi / Hajmi (1 kg, 500 ml, 10 dona va h.k.)
// Narx (1 kg yoki 1 dona uchun)
// Eski narx + chegirma foizi (agar bo‘lsa)
// Sifatli rasmlar (bir nechta)
// Tavsif (qisqa: “Yangi uzilgan, O‘zbekiston”)
// Mavjudlik (Bor / Tez orada tugaydi)
// Yetkazib berish muddati
// Reyting va mijozlar sharhlari</p></div>
// <div><p>3. Qulayliklar (Filtrlar)

// Narx bo‘yicha (arzon → qimmat)
// Tur bo‘yicha (organik, mahalliy, import)
// Brend bo‘yicha
// Og‘irligi bo‘yicha
// Yangi kelgan yoki “Chegirmada”</p></div>

// <div><p>4. Non, Pishiriq va Qandolatchilik

// Non va lavash
// Bulochka, baget, simit
// Tort, pechenye, vaflilar
// Qandolat mahsulotlari
// Quritilgan non va kruton</p></div>
//             </div>
//           )}

//           <input
//             className="inp"
//             type="text"
//             placeholder="Nima qidiryapsiz"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <div className="vvv" id="root">
//             <button className="ssssss">
//               <i className="fa-solid fa-user"></i>
//               <span>Siz</span>
//             </button>
        
//             <button>
//               <i className="fa-solid fa-cart-shopping"></i>
//               <span>Savat</span>
//             </button>
//           </div>
//         </nav>

//         <div className="APP">
//           {loading ? (
//             <h2>Yuklanmoqda...</h2>
//           ) : (
//             filteredUsers.map((user) => (
//               <div className="sss" key={user.id}>
//                 <div className="img-box">
//                   <img src={user.img} alt={user.ism} />
//                 </div>
//                 <div className="card-info">
//                   <h1 className="narx">{user.naex} so'm</h1>
//                   <h1 className="old">{user.old} so'm</h1>
//                   <h1 className="bbbb">{user.ism}</h1>
//                   <button className="fff">Sotib olish</button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       <div className="alll">
//         <footer>
//           <div>
//             <h2>Manzil: Andijon</h2>
//             <h2>Tel: 77 777 77 77</h2>
//             <h2>Insta:_kadirov_u_</h2>
//           </div>
//           <div>
//             <h2>Ism: Ulug'bek</h2>
//             <h2>Familiya: Kadirov</h2>
//             <h2>Uy manzili: Andijon Jalaquduq</h2>
//           </div>
//           <div>
//             <h2>Telegram: @ukadirov0000</h2>
//             <h2>YouTube: @_kadirov_u_</h2>
//             <h2>Ishlab chiqarish: Rayhon market</h2>
//           </div>
//           <div className="ikonkalar">
//             <h2 className="fa-brands fa-facebook"></h2>
//             <h2 className="fa-brands fa-instagram"></h2>
//             <h2 className="fa-brands fa-square-youtube"></h2>
//             <h2 className="fa-brands fa-telegram"></h2>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

// export default Uzummarket;









// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import Bolm3 from "./bolm3"
// import foo from "./ooo.png"
// import Bolm1 from "./bolm1";
// import Bolm2 from "./bolm2";



// const bannerImages = [
//   "https://avatars.mds.yandex.net/i?id=c1018fa98646f4bae01f5ab9f12ed6b40bf7f9aa-5316097-images-thumbs&n=13",
//   "https://avatars.mds.yandex.net/i?id=e4bfb09987fe9346da53507d889e280f1a43e6b0-9066083-images-thumbs&n=13",
//   "https://avatars.mds.yandex.net/i?id=862960759296704cad7e3ce95d75ff92-4269676-images-thumbs&ref=rim&n=33&w=200&h=250",
//   "https://avatars.mds.yandex.net/i?id=cadcac80bf099e3dbf74adb7d349fd2abb498fd8-9106782-images-thumbs&ref=rim&n=33&w=444&h=250",
//   "https://avatars.mds.yandex.net/i?id=2a00000179ee84aa8265349d2dd775dad4e4-4256861-images-thumbs&ref=rim&n=33&w=480&h=187",
// ];

// function Uzummarket() {
//   const [showBox, setShowBox] = useState(false);

//   const [search, setSearch] = useState("");
//   const [users, setUsers] = useState([]); 
  
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState("home"); 


//   const [slide, setSlide] = useState(0);

//   useEffect(() => {
//     axios.get("https://6a4f1cfae785c9ef536d5c53.mockapi.io/user/user") 
//       .then((res) => { 
//         setUsers(res.data); 
//         setLoading(false);
//       })
//       .catch((error) => { 
//         console.log("Xatolik:", error); 
//         setLoading(false);
//       });
//   }, []);


//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSlide((prev) => (prev + 1) % bannerImages.length);
//     }, 2000);
//     return () => clearInterval(timer);
//   }, []);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.ism && user.ism.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <div className="uuu">
//         <nav className="qqq">
//           <img
//             src={foo}
//             className="ytr"
//             width="80px"
//             style={{ cursor: "pointer" }}
//             onClick={() => setPage("home")}
//           />
          
//           <button onClick={() => setShowBox(!showBox)} className="ffff">
//             <i className="fa-brands fa-codepen"></i> Katalog
//           </button>

//           {showBox && (
//             <div className='boxs-modal'>
//               <div><p>1. Asosiy Kategoriyalar (Eng muhimlari)
//                 <hr />
//                 Meva va Sabzavotlar<br/>Go‘sht va Baliq<br/>Sut mahsulotlari (sut, yogurt, pishloq, qatiq va h.k.)<br/>Non va Non mahsulotlari<br/>Ichimliklar (suv, sharbat, gazli ichimliklar, choy, qahva)<br/>Shirinliklar va Snacks<br/>Yog‘lar, Soslar va Ziravorlar<br/>Makaron, Guruch, Don mahsulotlari<br/>Konserva va Tayyor ovqatlar<br/>Gigiena va Uy-ro‘zg‘or (sovun, tish pastasi, tozalovchi vositalar)<br/>Bolalar ovqatlari<br/>Muzlatilgan mahsulotlar<br/>Chegirmalar va Aksiyalar (alohida bo‘lim)</p></div>
//               <div><p>2. Har bir mahsulot uchun quyidagilarni qo‘shing:
//                 <hr />
//                 Mahsulot nomi (masalan: “Uzum (qizil) 1 kg”)<br/>Og‘irligi / Hajmi (1 kg, 500 ml, 10 dona va h.k.)<br/>Narx (1 kg yoki 1 dona uchun)<br/>Eski narx + chegirma foizi (agar bo‘lsa)<br/>Sifatli rasmlar (bir nechta)<br/>Tavsif (qisqa: “Yangi uzilgan, O‘zbekiston”)<br/>Mavjudlik (Bor / Tez orada tugaydi)<br/>Yetkazib berish muddati<br/>Reyting va mijozlar sharhlari</p></div>
//               <div><p>3. Qulayliklar (Filtrlar)
//                 <hr />
//                 Narx bo‘yicha (arzon → qimmat)<br/>Tur bo‘yicha (organik, mahalliy, import)<br/>Brend bo‘yicha<br/>Og‘irligi bo‘yicha<br/>Yangi kelgan yoki “Chegirmada”</p></div>
//               <div><p>4. Non, Pishiriq va Qandolatchilik
//                 <hr />
//                 Non va lavash<br/>Bulochka, baget, simit<br/>Tort, pechenye, vaflilar<br/>Qandolat mahsulotlari<br/>Quritilgan non va kruton</p></div>
//             </div>
//           )}

//           <input
//             className="inp"
//             type="text"
//             placeholder="Nima qidiryapsiz"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <div className="vvv" id="root">
//             <button className="ssssss" onClick={() => setPage("siz")}>
//               <i className="fa-solid fa-user"></i>
//               <span>Siz</span>
//             </button>
        
//             <button onClick={() => setPage("savat")}>
//               <i className="fa-solid fa-cart-shopping"></i>
//               <span>Savat</span>
//             </button>

//             <button onClick={() => setPage("yetgazib berish")}>
//               <i className="fa-solid fa-cart-shopping"></i>
//               <span>yetgazib berish</span>
//             </button>
//           </div>
//         </nav> 
//         {page === "siz" && <Bolm1 />}
//         {page === "savat" && <Bolm2 />}
//         {page === "yetgazib berish" && <Bolm3 />}

//         {page === "home" && (
//           <>
//             <div className="banner-slider">
//               <div
//                 className="banner-track"
//                 style={{ transform: `translateX(-${slide * 100}%)` }}
//               >
//                 {bannerImages.map((img, i) => (
//                   <img key={i} src={img} alt={`banner-${i}`} className="banner-img" width="100px"/>
//                 ))}
//               </div>
//             </div>

//             <div className="APP">
//               {loading ? (
//                 <h2>Yuklanmoqda...</h2>
//               ) : (
//                 filteredUsers.map((user) => (
//                   <div className="sss" key={user.id}>
//                     <div className="img-box">
//                       <img src={user.img} alt={user.ism} />
//                     </div>
//                     <div className="card-info">
//                       <h1 className="narx">{user.naex} so'm</h1> 
//                       <h1 className="old">{user.old} so'm</h1>
//                       <h1 className="bbbb">{user.ism}</h1>
//                 <button className="fff" onClick={() => setPage("savat")}>Sotib olish</button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </>
//         )}
//       </div>
      

//       <div className="alll">
//         <footer>
//           <div>
//             <h2>Manzil: Andijon qo'rg'ontepa tuman ilich mahalas </h2>
//             <h2>Tel:77 383 62 82</h2>
//             <h2>Insta:_kadirov_u_</h2>
//           </div>
//           <div>
//             <h2>Ism: Rayhona</h2>
//             <h2>Familiya: Saparova</h2>
//             <h2>Uy manzili: ilich mahalas 76-uy</h2>
//           </div>
//           <div>
//             <h2>Telegram: @ukadirov0000</h2>
//             <h2>YouTube: @_kadirov_u_</h2>
//             <h2>Ishlab chiqarish: Rayhon market</h2>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

// export default Uzummarket;






































































































// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import Bolm3 from "./bolm3"
// import foo from "./ooo.png"
// import Bolm1 from "./bolm1";
// import Bolm2 from "./bolm2";




// const bannerImages = [
//   "https://avatars.mds.yandex.net/i?id=c1018fa98646f4bae01f5ab9f12ed6b40bf7f9aa-5316097-images-thumbs&n=13",
//   "https://avatars.mds.yandex.net/i?id=e4bfb09987fe9346da53507d889e280f1a43e6b0-9066083-images-thumbs&n=13",
//   "https://avatars.mds.yandex.net/i?id=862960759296704cad7e3ce95d75ff92-4269676-images-thumbs&ref=rim&n=33&w=200&h=250",
//   "https://avatars.mds.yandex.net/i?id=cadcac80bf099e3dbf74adb7d349fd2abb498fd8-9106782-images-thumbs&ref=rim&n=33&w=444&h=250",
//   "https://avatars.mds.yandex.net/i?id=2a00000179ee84aa8265349d2dd775dad4e4-4256861-images-thumbs&ref=rim&n=33&w=480&h=187",
// ];

// function Uzummarket() {
//   const [showBox, setShowBox] = useState(false);

//   const [search, setSearch] = useState("");
//   const [users, setUsers] = useState([]); 
  
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState("home"); 


//   const [cart, setCart] = useState([]);

//   const [slide, setSlide] = useState(0);

//   useEffect(() => {
//     axios.get("https://6a4f1cfae785c9ef536d5c53.mockapi.io/user/user") 
//       .then((res) => { 
//         setUsers(res.data); 
//         setLoading(false);
//       })
//       .catch((error) => { 
//         console.log("Xatolik:", error); 
//         setLoading(false);
//       });
//   }, []);


//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSlide((prev) => (prev + 1) % bannerImages.length);
//     }, 2000);
//     return () => clearInterval(timer);
//   }, []);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.ism && user.ism.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleSotibOlish = (user) => {
//     setCart((prevCart) => [...prevCart, user]);
//     setPage("savat");
//   };

//   return (
//     <>
//       <div className="uuu">
//         <nav className="qqq">
//           <img
//             src={foo}
//             className="ytr"
//             width="80px"
//             style={{ cursor: "pointer" }}
//             onClick={() => setPage("home")}
//           />
          
//           <button onClick={() => setShowBox(!showBox)} className="ffff">
//             <i className="fa-brands fa-codepen"></i> Katalog
//           </button>

//           {showBox && (
//             <div className='boxs-modal'>
//               <div><p>1. Asosiy Kategoriyalar (Eng muhimlari)
//                 <hr />
//                 Meva va Sabzavotlar<br/>Go‘sht va Baliq<br/>Sut mahsulotlari (sut, yogurt, pishloq, qatiq va h.k.)<br/>Non va Non mahsulotlari<br/>Ichimliklar (suv, sharbat, gazli ichimliklar, choy, qahva)<br/>Shirinliklar va Snacks<br/>Yog‘lar, Soslar va Ziravorlar<br/>Makaron, Guruch, Don mahsulotlari<br/>Konserva va Tayyor ovqatlar<br/>Gigiena va Uy-ro‘zg‘or (sovun, tish pastasi, tozalovchi vositalar)<br/>Bolalar ovqatlari<br/>Muzlatilgan mahsulotlar<br/>Chegirmalar va Aksiyalar (alohida bo‘lim)</p></div>
//               <div><p>2. Har bir mahsulot uchun quyidagilarni qo‘shing:
//                 <hr />
//                 Mahsulot nomi (masalan: “Uzum (qizil) 1 kg”)<br/>Og‘irligi / Hajmi (1 kg, 500 ml, 10 dona va h.k.)<br/>Narx (1 kg yoki 1 dona uchun)<br/>Eski narx + chegirma foizi (agar bo‘lsa)<br/>Sifatli rasmlar (bir nechta)<br/>Tavsif (qisqa: “Yangi uzilgan, O‘zbekiston”)<br/>Mavjudlik (Bor / Tez orada tugaydi)<br/>Yetkazib berish muddati<br/>Reyting va mijozlar sharhlari</p></div>
//               <div><p>3. Qulayliklar (Filtrlar)
//                 <hr />
//                 Narx bo‘yicha (arzon → qimmat)<br/>Tur bo‘yicha (organik, mahalliy, import)<br/>Brend bo‘yicha<br/>Og‘irligi bo‘yicha<br/>Yangi kelgan yoki “Chegirmada”</p></div>
//               <div><p>4. Non, Pishiriq va Qandolatchilik
//                 <hr />
//                 Non va lavash<br/>Bulochka, baget, simit<br/>Tort, pechenye, vaflilar<br/>Qandolat mahsulotlari<br/>Quritilgan non va kruton</p></div>
//             </div>
//           )}

//           <input
//             className="inp"
//             type="text"
//             placeholder="Nima qidiryapsiz"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}

//           />



//           <div className="vvv" id="root">
//             <button className="ssssss" onClick={() => setPage("siz")}>
//               <i className="fa-solid fa-user"></i>
//               <span>Siz</span>
//             </button>
        
//             <button onClick={() => setPage("savat")}>
//               <i className="fa-solid fa-cart-shopping"></i>
//               <span>Savat</span>
//             </button>

//             <button onClick={() => setPage("yetgazib berish")}>
//               <i class="fa-solid fa-truck-fast"></i>
//               <span>yetgazib berish</span>
//             </button>
//           </div>
//         </nav> 
//         {page === "siz" && <Bolm1 />}
   
//         {page === "yetgazib berish" && <Bolm3 />}
//         {page === "savat" && <Bolm2 cart={cart} setCart={setCart} />}
   

//         {page === "home" && (
//           <>
//             <div className="banner-slider">
//               <div
//                 className="banner-track"
//                 style={{ transform: `translateX(-${slide * 100}%)` }}
//               >
//                 {bannerImages.map((img, i) => (
//                   <img key={i} src={img} alt={`banner-${i}`} className="banner-img" width="100px"/>
//                 ))}
//               </div>
//             </div>

//             <div className="APP">
//               {loading ? (
//                 <h2>Yuklanmoqda...</h2>
//               ) : (
//                 filteredUsers.map((user) => (
//                   <div className="sss" key={user.id}>
//                     <div className="img-box">
//                       <img src={user.img} alt={user.ism} />
//                     </div>
//                     <div className="card-info">
//                       <h1 className="narx">{user.naex} so'm</h1> 
//               <h1 className="old">{user.old} so'm</h1>
//                       <h1 className="bbbb">{user.ism}</h1>
//             <button className="fff" onClick={() => handleSotibOlish(user)}>
//                         Sotib olish
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </>
//         )}
//       </div>
      

//       <div className="alll">
//         <footer>
//           <div>
//             <h2>Manzil: Andijon qo'rg'ontepa tuman ilich mahalas </h2>
//             <h2>Tel:77 383 62 82</h2>
//             <h2>Insta:_kadirov_u_</h2>
//           </div>
//           <div>
//             <h2>Ism: Rayhona</h2>
//             <h2>Familiya: Saparova</h2>
//             <h2>Uy manzili: ilich mahalas 76-uy</h2>
//           </div>
//           <div>
//             <h2>Telegram: @ukadirov0000</h2>
//             <h2>YouTube: @_kadirov_u_</h2>
//             <h2>Ishlab chiqarish: Rayhon market</h2>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

// export default Uzummarket;









import React, { useEffect, useState } from "react";
import axios from 'axios';
import Bolm3 from "./bolm3"
import foo from "./ooo.png"
import Bolm1 from "./bolm1";
import Bolm2 from "./bolm2";




const bannerImages = [
  "https://avatars.mds.yandex.net/i?id=c1018fa98646f4bae01f5ab9f12ed6b40bf7f9aa-5316097-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=e4bfb09987fe9346da53507d889e280f1a43e6b0-9066083-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=dc9ac13d177f422d99118586f1edcabc6fb58931-4837721-images-thumbs&ref=rim&n=33&w=480&h=240",
  "https://avatars.mds.yandex.net/i?id=cadcac80bf099e3dbf74adb7d349fd2abb498fd8-9106782-images-thumbs&ref=rim&n=33&w=444&h=250",
  "https://avatars.mds.yandex.net/i?id=2a00000179ee84aa8265349d2dd775dad4e4-4256861-images-thumbs&ref=rim&n=33&w=480&h=187",
];

function Uzummarket() {
  const [showBox, setShowBox] = useState(false);

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]); 
  
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home"); 


  const [cart, setCart] = useState([]);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    axios.get("https://6a4f1cfae785c9ef536d5c53.mockapi.io/user/user") 
      .then((res) => { 
        setUsers(res.data); 
        setLoading(false);
      })
      .catch((error) => { 
        console.log("Xatolik:", error); 
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % bannerImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.ism && user.ism.toLowerCase().includes(search.toLowerCase())
  );

  const handleSotibOlish = (user) => {
    setCart((prevCart) => [...prevCart, user]);
    setPage("savat");
  };

  return (
    <>
      <div className="uuu">
        <nav className="qqq">
          
          <img 
          
            src={foo}
            alt="Logo"
            className="ytr"
            width="80px"
            style={{ cursor: "pointer" }}
            onClick={() => setPage("home")}/>
          
          <button onClick={() => setShowBox(!showBox)} className="ffff">
            <i className="fa-brands fa-codepen"></i> Katalog
          </button>

          {showBox && (
            <div className='boxs-modal'>
              <div><p>1. Asosiy Kategoriyalar (Eng muhimlari)
                <hr />
                Meva va Sabzavotlar<br/>Go‘sht va Baliq<br/>Sut mahsulotlari (sut, yogurt, pishloq, qatiq va h.k.)<br/>Non va Non mahsulotlari<br/>Ichimliklar (suv, sharbat, gazli ichimliklar, choy, qahva)<br/>Shirinliklar va Snacks<br/>Yog‘lar, Soslar va Ziravorlar<br/>Makaron, Guruch, Don mahsulotlari<br/>Konserva va Tayyor ovqatlar<br/>Gigiena va Uy-ro‘zg‘or (sovun, tish pastasi, tozalovchi vositalar)<br/>Bolalar ovqatlari<br/>Muzlatilgan mahsulotlar<br/>Chegirmalar va Aksiyalar (alohida bo‘lim)</p></div>
              <div><p>2. Har bir mahsulot uchun quyidagilarni qo‘shing:
                <hr />
                Mahsulot nomi (masalan: “Uzum (qizil) 1 kg”)<br/>Og‘irligi / Hajmi (1 kg, 500 ml, 10 dona va h.k.)<br/>Narx (1 kg yoki 1 dona uchun)<br/>Eski narx + chegirma foizi (agar bo‘lsa)<br/>Sifatli rasmlar (bir nechta)<br/>Tavsif (qisqa: “Yangi uzilgan, O‘zbekiston”)<br/>Mavjudlik (Bor / Tez orada tugaydi)<br/>Yetkazib berish muddati<br/>Reyting va mijozlar sharhlari</p></div>
              <div><p>3. Qulayliklar (Filtrlar)
                <hr />
                Narx bo‘yicha (arzon → qimmat)<br/>Tur bo‘yicha (organik, mahalliy, import)<br/>Brend bo‘yicha<br/>Og‘irligi bo‘yicha<br/>Yangi kelgan yoki “Chegirmada”</p></div>
              <div><p>4. Non, Pishiriq va Qandolatchilik
                <hr />
                Non va lavash<br/>Bulochka, baget, simit<br/>Tort, pechenye, vaflilar<br/>Qandolat mahsulotlari<br/>Quritilgan non va kruton</p></div>
            </div>
          )}

          <input
            className="inp"
            type="text"
            placeholder="Nima qidiryapsiz"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="vvv" id="root">
            <button className="ssssss" onClick={() => setPage("siz")}>
              <i className="fa-solid fa-user"></i>
              <span>Siz</span>
            </button>
        
            <button onClick={() => setPage("savat")}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Savat</span>
            </button>

            <button onClick={() => setPage("yetgazib berish")}>
              <i className="fa-solid fa-truck-fast"></i>
              <span>yetgazib berish</span>
            </button>
          </div>
        </nav> 
        {page === "siz" && <Bolm1 />}
        {page === "savat" && <Bolm2 cart={cart} setCart={setCart} />}
        {page === "yetgazib berish" && <Bolm3 />}
        {/* {page === "biz " && <biz/>} */}

        {page === "home" && (
          <>
            <div className="banner-slider">
              <div
                className="banner-track"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {bannerImages.map((img, i) => (
                  <img key={i} src={img} alt={`banner-${i}`} className="banner-img" width="100px"/>
                ))}
              </div>
            </div>

            <div className="APP">
              {loading ? (
                <h2>Yuklanmoqda...</h2>
              ) : (
                filteredUsers.map((user) => (
                  <div className="sss" key={user.id}>
                    <div className="img-box">
                      <img src={user.img} alt={user.ism} />
                    </div>
                    <div className="card-info">
                      <h1 className="narx">{user.naex} so'm</h1> 
              <h1 className="old">{user.old} so'm</h1>
                      <h1 className="bbbb">{user.ism}</h1>
            <button className="fff" onClick={() => handleSotibOlish(user)}>
                        Sotib olish
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
      

      <div className="alll">
        <footer>
          <div>
            <h2>Manzil: Andijon qo'rg'ontepa tuman ilich mahalas </h2>
            <h2>Tel:77 383 62 82</h2>
            
            <a className="adg" href="https://www.instagram.com/_kadirov_u_/"><h1>Insta:_kadirov_u_</h1></a>
          </div>
          <div>
            <h2>Ism: Rayhona</h2>
            <h2>Familiya: Saparova</h2>
            <h2>Uy manzili: ilich mahalas 76-uy</h2>
          </div>
          <div>
            
            <h2>YouTube: @_kadirov_u_</h2>
            <h2>Ishlab chiqarish: Rayhon market</h2>
            <a className="bgr" href="https://t.me/ukadirov0000">Telegram:@ukadirov0000</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Uzummarket;