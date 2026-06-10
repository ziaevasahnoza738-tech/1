

import { useEffect, useState } from "react";
import axios from 'axios'
import logo from '././scss/logo.png'
import qqq from "./scss/qqq.avif"

function APP() {


  const [showBox, setShowBox] = useState(false);
  const [search, setSearch] = useState("");



  const [users, setUsears] = useState([]);

  useEffect(() => {
    axios.get("https://6a0ad25221e445625696a932.mockapi.io/app/1x/sssssss")
      .then((res) => { setUsears(res.data); })
      .catch((error) => { console.log(error); });

  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.ism && user.ism.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        {showBox && (
          <div className='boxs'>
            <h3>rtgaergretmaertq</h3>
          </div>
        )}

      </div>

      <div className="uuu">
        <nav className="qqq">
          <img className="eee" src={logo} alt="" />
          <button onClick={() => setShowBox(!showBox)} className="ffff">
            <i class="fa-brands fa-codepen"></i>Bosing

          </button>

          <input
            className="inp"
            type="text"
            placeholder="Nima qidiryabsiz"
            value={search}
            onChange={(e) => setSearch(e.target.value)}

          />

          <div className="mmm" id="root">

            <button className="ssssss"><i class="fa-solid fa-user"></i><h1>Siz</h1></button>
            <button><i class="fa-solid fa-heart"></i><h1>Istaklar</h1></button>
            <button><i class="fa-solid fa-cart-shopping"></i><h1>Karzinka</h1></button>
          </div>

        </nav>

        <div>
          <img className="ddddddd" src={qqq} alt="" height="20%" />

        </div>

        <div className="APP">
          {filteredUsers.map((user) => (
            <>
              <div className="sss" key={user.id}>
                < img src={user.img} />

                <h1 className="narx">{user.narx}so'm</h1>

                <h1 className="old">       {user.old}so'm</h1>

                <h1 > {user.ism}</h1>

                {/* <h1>⭐{user.bal}</h1> */}
                <button className="fff">Sotib olish</button>
              </div>

            </>

          ))
          }
        </div>
      </div>

      <footer>
        <div>
          <h1 >Manzl:toshkent</h1>
          <h1>Tel:77 777 77 77</h1>
          <h1>Insta:_kadirov_u_</h1>
        </div>
        <div>
          <h1>Ism:Ulug'bek</h1>
          <h1>Fam:Kadirov</h1>
          <h1>uy manzl:Andjon Qo'rg'ontepa</h1>
        </div>
        <div>
          <h1>Telegram:@ukadirov571 </h1>
          <h1>Yutub:@_kadirov_u_</h1>
          <h1>Ishlab chiqarsh:Uzum market</h1>
        </div>

      </footer>

    </>

  )

}
export default APP;
