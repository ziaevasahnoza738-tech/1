import '../app.css'
import footo from "../ddd.jpg"
import eee from "../gggg.jpg"

function Portfolio() {
  return (
    <div className="App">
      <nav>
        <div className="logo">PORTFOLIO</div>
        <div className="nav-links">
          <a href="#home">Asosiy</a>
          <a href="#about">Men haqimda</a>
          <a href="#projects">Sertifikat</a>
          <a href="#contact">Bog'lanish</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="photo-side">
            <div className="photo-container">
              <img src={footo} alt="Mening rasimim" className="photo" />
            </div>
          </div>

          <div className="text-side">
            <h1>Ulug'bek Kadirov</h1>
            <p className="subtitle">Frontend va Bekent</p>
            <p className="description">Web dasturchi - HTML, CSS, JS, REAKT</p>

            <div className="skills">
              <div className="skill">: HTML</div>
              <div className="skill">: CSS</div>
              <div className="skill">: JS</div>
              <div className="skill">: React.js</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>Men haqimda</h2>
        <div className="ggg">
          Assalomu alaykum! Mening ismim <b>Ulug'bek Kadirov</b>. Men 2010-yil 28-aprel kuni
          tug'ilganman va hozirda Andijon viloyati, Jalaquduq tumani, Ko'tarma MFYda yashayman.
          Men 24-sonli umumiy o'rta ta'lim maktabida 9-sinfni tamomlaganman. Hozirda 1-son
          Kasb-hunar maktabida tahsil olyapman.
          <br />
          <br />
          Bo'sh vaqtlarimda dasturlashni o'rganish, yangi loyihalar yaratish va bilimlarimni
          oshirish bilan shug'ullanaman. Kelajakdagi asosiy maqsadim — <b>kiberxavfsizlik</b>{' '}
          sohasida kuchli mutaxassis bo'lish va shu yo'nalishda oliy ta'lim olish.
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Sertifikatlar</h2>
        <div className="ser">
          <img src={eee} alt="Sertifikat" className="ser" />
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Bog'lanish</h2>
        <div className="asas">
          <h1>tel: 77 383 62 82</h1>
          <h1>
            Instagram: <a href="https://instagram.com/_kadirov_u_">@_kadirov_u_</a>
          </h1>
          <h1>
            Telegram: <a href="https://t.me/qkadirov0000">@qkadirov0000</a>
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
