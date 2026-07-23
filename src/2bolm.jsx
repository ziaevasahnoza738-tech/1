// import React from 'react';
// export default function Section2() {
//   const images = [
//     "https://avatars.mds.yandex.net/i?id=5f36a1b4f21e2d4ff0badd28c123dcb4afc95608-10877238-images-thumbs&n=13",
//     "https://avatars.mds.yandex.net/i?id=ab40922d870d976aeabd7f703fca7870681ab39b-13235031-images-thumbs&n=13",
//     "https://avatars.mds.yandex.net/i?id=04fffa32bb415d630936c8dd790a859034818503-10104781-images-thumbs&n=13",
//     "https://avatars.mds.yandex.net/i?id=93422950f8d7029c6b108debb0b9e0c60692824e-4281133-images-thumbs&n=13",
//     "https://avatars.mds.yandex.net/i?id=7c8183d1868591476a053a2d39d928410718dcbc-3418703-images-thumbs&n=13",
//     "https://avatars.mds.yandex.net/i?id=662374e33f03330a0a24bd49b9627e0abdd08283-12884907-images-thumbs&n=13",
//     "https://avatars.mds.yandex.net/i?id=28bdebc384c41da1db19717fce55b036ca6f2158-12854487-images-thumbs&n=13",
//     "https://avatars.mds.yandex.net/i?id=4455138028e61060926799a62a28dc673d3b973b-10751926-images-thumbs&n=13",
//     "https://avatars.mds.yandex.net/i?id=636d0123a30a2e33a9cc159308fa918bdfbd346e-5218303-images-thumbs&n=13",
//   ];

//   const doubleImages = [...images, ...images];
  
//   return(
//     <>
//     <p className='men'>Men haqimda
// Salom! Men Qodirov Ulug‘bekman. 2010-yil 28-aprelda Andijon viloyati, Jalaquduq tumani, Ko‘tarma MFYda tug‘ilganman. Hozir 16 yoshdaman.
// 2026-yilda 24-maktabning 9B sinfini bitirib, 1-sonli kollejga o‘qishga kirdim.
// Dasturlashga 2026-yil yanvar oyidan boshlab jiddiy qiziqib qoldim. Qisqa vaqt ichida HTML, CSS, JavaScript va Reactni o‘rganib chiqdim. Hozirda o‘rgangan bilimlarimni mustahkamlab, birinchi loyihalarimni yaratish ustida ishlayapman.
// Bo‘sh vaqtlarimda dam olish uchun PUBG Mobile va boshqa o‘yinlar bilan shug‘ullanaman. Texnologiyalar va o‘yinlar mening eng katta qiziqishlarimdan biri hisoblanadi.
// Kelajakda professional veb-dasturchi bo‘lib, zamonaviy va foydali loyihalar yaratishni orzu qilaman.</p>


//  <div className="carousel-container">
//       <div className="carousel-track">
//         {doubleImages.map((src, index) => (
//           <div key={index} className="img-card">
//             <img src={src} alt={`Portfolio ${index}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   )
// }
import React from 'react';
import foto from './ddd.jpg'
export default function Section2() {
  const images = [
    "https://avatars.mds.yandex.net/i?id=5f36a1b4f21e2d4ff0badd28c123dcb4afc95608-10877238-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=ab40922d870d976aeabd7f703fca7870681ab39b-13235031-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=04fffa32bb415d630936c8dd790a859034818503-10104781-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=93422950f8d7029c6b108debb0b9e0c60692824e-4281133-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=7c8183d1868591476a053a2d39d928410718dcbc-3418703-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=662374e33f03330a0a24bd49b9627e0abdd08283-12884907-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=28bdebc384c41da1db19717fce55b036ca6f2158-12854487-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=4455138028e61060926799a62a28dc673d3b973b-10751926-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=636d0123a30a2e33a9cc159308fa918bdfbd346e-5218303-images-thumbs&n=13",
  ];

  const doubleImages = [...images, ...images];
  
  return(
    <>
    <div className="about-wrapper" style={{ display: 'flex', gap: '30px', alignItems: 'center', margin: '20px 0' }}>
      

      <p className='men' style={{ flex: '1' }}>
        <strong>Men haqimda</strong><br /><br />
       Salom! Men Qodirov Ulug'bek, 16 yoshdaman va Andijon viloyatida yashayman.<br />
       Hozirda 1-sonli kollejda tahsil olaman. 2026-yil yanvaridan boshlab dasturlashga jiddiy qiziqib qoldim va qisqa vaqt ichida HTML, CSS, JavaScript hamda React'ni o'rgandim. Bugungi kunda olgan bilimlarimni mustahkamlab, birinchi shaxsiy loyihalarimni yaratish ustida ishlayapman.<br />
       Texnologiyalar va zamonaviy veb-yechimlar mening asosiy qiziqishlarimdan biri. Kelajakda professional veb-dasturchi bo'lib, foydali va sifatli loyihalar yaratishni maqsad qilganman.
<br />
      </p>


      <div className="my-photo" style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
        <img 
          src={foto} 
          alt="Qodirov Ulug'bek" 
          style={{ maxWidth: '50%', height: 'auto', borderRadius: '10px' }} 
        />
      </div>

    </div>
<h1 className='qwq'>Qiziqish va bilimlarim:</h1>
    <div className="carousel-container">
      <div className="carousel-track">
        {doubleImages.map((src, index) => (
          <div key={index} className="img-card">
            <img src={src} alt={`Portfolio ${index}`} />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
