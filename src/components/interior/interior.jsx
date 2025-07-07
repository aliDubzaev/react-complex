import React, {useState} from "react";
import "./interior.css";
import ModalCluster from "../ui/modalCluster";

import light1 from "./img/light/Light_1.png";
import light2 from "./img/light/Light_2.png";
import light3 from "./img/light/Light_3.png";
import lightIcon from "./img/light/Group 1926.png";
import lightModal from "./img/light/img.png";

import dark1 from "./img/dark/Dark_1.png";
import dark2 from "./img/dark/Dark_2.png";
import dark3 from "./img/dark/Dark_3.png";
import darkIcon from "./img/dark/Group 1926 (1).png";
import darkModal from "./img/dark/img (1).png";

function Interior() {
  const [openModalType, setOpenModalType] = useState(null);

  function openModal(type) {
    setOpenModalType(type);
  }

  function closeModal() {
    setOpenModalType(null);
  }

  return (
    <section className="interiorSection">
      <h1>2 варианта отделки</h1>

      <hr />

      <div className="interiorBlock">
        <div className="interiorBlock__header">
          <h4>Светлая отделка</h4>
          <button onClick={() => openModal('light')}>Скачать дизайн-буклет</button>
        </div>
        <div className="firstBlock">
          <img src={light1} className="blockImg" alt="" />
          <div className="interiorText light">
            <img src={lightIcon} alt="icon" />
            <h6>Особенности интерьера</h6>
            <p>
              Сочетание белых стен и светлой напольной доски 
              с текстурой дерева расширяет пространство,
              формируя гармоничную, наполненную светом атмосферу
            </p>
          </div>
        </div>
        <div className="secondBlock">
          <img src={light2} alt="" />
          <img src={light3} alt="" />
        </div>
      </div>

      <hr />

      <div className="interiorBlock">
        <div className="interiorBlock__header">
          <h4>Тёмная отделка</h4>
          <button onClick={() => openModal('dark')}>Скачать дизайн-буклет</button>
        </div>
        <div className="firstBlock">
          <img src={dark1} className="blockImg" alt="" />
          <div className="interiorText light">
            <img src={darkIcon} alt="icon" />
            <h6>Особенности интерьера</h6>
            <p>
              Отделка в тёмном варианте формируется за счёт нейтральных оттенков стен, 
              а также напольной доски,
              выполненной в цвете темного дерева
            </p>
          </div>
        </div>
        <div className="secondBlock">
          <img src={dark2} alt="" />
          <img src={dark3} alt="" />
        </div>
      </div>
      {openModalType === 'light' && (
        <ModalCluster
          imgSrc={lightModal}
          headerText="Получите дизайн-буклет с подробным описанием отделки светлого интерьера"
          buttonText="Получить буклет"
          backgroundColor="#faf8f5"
          closeModal={closeModal}
        />
      )}
      {openModalType === 'dark' && (
        <ModalCluster
          imgSrc={darkModal}
          headerText="Получите дизайн-буклет с подробным описанием отделки тёмного интерьера"
          buttonText="Получить буклет"
          backgroundColor="rgba(66, 53, 42, 1)"
          closeModal={closeModal}
        />
      )}
    </section>
  )
}

export default Interior;