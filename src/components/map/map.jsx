// src/components/Map.jsx
import "./map.css";
import mapImage from "./img/map.png";
import panoramaImage from "./img/panorama.png";
import icon from "./img/Vector.png";
import { useState, useRef } from "react";

function Map() {
  const [showPanorama, setShowPanorama] = useState(false);
  const mapRef = useRef(null);

  function handleClosePanorama() {
    setShowPanorama(false);
    setTimeout(() => {
      mapRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <section className="mapSection" ref={mapRef}>
      {!showPanorama ? (
        <div className="mapWrapper">
          <div className="mapHeader">
            <h6>Престижное расположение</h6>
          </div>
          <h2 className="mapTitle">
            Один из самых зелёных <br />
            районов столицы — <span>Раменки</span>
          </h2>
          <div className="mapImage">
            <img src={mapImage} alt="Карта" />
          </div>
          <p className="mapDescription">
            ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки и
            природным заказником "Долина реки Сетунь"
          </p>
          <button className="panoramaButton" onClick={() => setShowPanorama(true)}>
            <img src={icon} alt="иконка" />
            <span>Панорама района 360°</span>
          </button>
        </div>
      ) : (
        <div className="modalOverlay">
          <div className="close-button-outside" onClick={handleClosePanorama}>
            ×
          </div>
          <div className="panoramaView">
            <img src={panoramaImage} alt="Панорама" className="fadeIn" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Map;
