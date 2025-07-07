import React, { useState } from "react";
import CustomSwiper from "./CustomSwiper";
import ModalCluster from "../ui/modalCluster";

import "swiper/css";
import "swiper/css/bundle";

import "./cluster.css";

import riverIcon from "./img/Riverline/riverline.svg";
import parkIcon from "./img/Parkline/parkline.svg";

import river from "./img/Riverline/img.png";
import river1 from "./img/Riverline/img1.png";
import river2 from "./img/Riverline/img2.png";
import river3 from "./img/Riverline/img3.png";
import river4 from "./img/Riverline/img4.png";
import river5 from "./img/Riverline/img5.png";
import river6 from "./img/Riverline/img6.png";
import river7 from "./img/Riverline/img7.png";
import river8 from "./img/Riverline/img8.png";
import river9 from "./img/Riverline/img9.png";
import riverPic from "./img/Riverline/River1.png";

import park from "./img/Parkline/img.png";
import park1 from "./img/Parkline/img1.png";
import park2 from "./img/Parkline/img2.png";
import park3 from "./img/Parkline/img3.png";
import park4 from "./img/Parkline/img4.png";
import park5 from "./img/Parkline/img5.png";
import park6 from "./img/Parkline/img6.png";
import parkPic from "./img/Parkline/Park1.png";

function Clusters() {
  const [openModalType, setOpenModalType] = useState(null);

  function openModal(type) {
    setOpenModalType(type);
  }

  function closeModal() {
    setOpenModalType(null);
  }

  return (
    <section className="clusterSection">
      <h1>Жилой комплекс состоит из двух кластеров</h1>
      <div className="riverContainer">
        <div className="riverMainCont">
          <div className="riverTextCont">
            <div className="riverHeaderCont">
              <h4>River Line</h4>
              <img src={riverIcon} alt="Ривер иконка" />
            </div>
            <p>
              Восемь жилых корпусов по 12–14 этажей, выстроены вдоль реки Раменки
            </p>
          </div>
          <button onClick={() => openModal("river")}>Посмотреть планировки</button>
        </div>
        <CustomSwiper
          img={[river, river1, river2, river3, river4, river5, river6, river7, river8, river9]}
        />
      </div>
      <div className="parkContainer">
        <div className="parkMainCont">
          <div className="parkTextCont">
            <div className="parkHeaderCont">
              <h4>Park Line</h4>
              <img src={parkIcon} alt="Парк иконка" />
            </div>
            <p>
              Семь 14-этажных жилых корпусов, расположенных вдоль Матвеевского леса
            </p>
          </div>
          <button onClick={() => openModal("park")}>Посмотреть планировки</button>
        </div>
        <CustomSwiper img={[park, park1, park2, park3, park4, park5, park6]} />
      </div>
      {openModalType === "river" && (
        <ModalCluster
          imgSrc={riverPic}
          headerText="Получите подробное описание и цены на свободные планировки в кластере River Line"
          buttonText="Получить планировки"
          backgroundColor="rgba(31, 32, 87, 1)"
          closeModal={closeModal}
        />
      )}
      {openModalType === "park" && (
        <ModalCluster
          imgSrc={parkPic}
          headerText="Получите подробное описание и цены на свободные планировки в кластере Park Line"
          buttonText="Получить планировки"
          backgroundColor="rgba(160, 167, 71, 1)"
          closeModal={closeModal}
        />
      )}
    </section>
  );
}

export default Clusters;
