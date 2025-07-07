import React from "react";
import "./footer.css";

import westGarden from "./img/mainLogo.png";
import estesLogo from "./img/logo.png";
import map from "./img/map.png";

function Footer() {
  return (
    <section className="footerSection">
      <div className="footerContainer">
        <div className="headerBlock">
          <h2>Жилой комплекс "West Garden" — <br /> все преимущества жизни на природе</h2>
          <img src={westGarden} alt="Логотип West Garden" />
        </div>
        <hr className="line"/>
        <div className="footerBlock">
          <div className="footerText">
            <img src={estesLogo} alt="Логотип ESTES" />
            <hr />
            <div className="adressBlock">
              <p>Офис продаж</p>
              <p>Москва, Локал наб. 2/4, строение 17, офис 308</p>
            </div>
            <hr />
            <div className="phoneBlock">
              <p>Телефон</p>
              <div>
                <p>+7 495 805 19 34</p>
                <span>· работаем</span>
              </div>
            </div>
          </div>
          <div className="mapBlock">
            <img src={map} className="map" alt="Карта" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;