import React from "react";
import "./lobby.css";

import door from "./img/door.png";
import elevator from "./img/elevator.png";
import img1 from "./img/image150.png";
import img2 from "./img/image151.png";
import img3 from "./img/image152.png";
import img4 from "./img/image153.png";
import star from "./img/star.png";

function Lobby () {
  return (
    <section className="lobbySection">
      <h1>Современная эстетика лобби</h1>
      <div className="lobbyBlock">
        <div className="headerLobby">
          <img src={door} alt="Дверь иконка" />
          <h4>Центральные входные группы</h4>
        </div>
        <div className="textLobby">
          <div>
            <img src={star} alt="Звезда иконка" />
            <p>Зоны ожидания и встреч</p>
          </div>
          <div>
            <img src={star} alt="Звезда иконка" />
            <p>Пост охраны</p>
          </div>
          <div>
            <img src={star} alt="Звезда иконка" />
            <p>Переговорная комната</p>
          </div>
          <div>
            <img src={star} alt="Звезда иконка" />
            <p>Колясочная</p>
          </div>
        </div>
        <div className="photoLobby">
          <img src={img1} alt="lobby" />
          <img src={img2} alt="lobby" />
        </div>
      </div>
      <div className="lobbyBlock">
        <div className="headerLobby">
          <img src={elevator} alt="Лифт иконка" />
          <h4>Лифтовый холл</h4>
        </div>
        <div className="textLobby">
          <div>
            <img src={star} alt="Звезда иконка" />
            <p>2-4 лифта</p>
          </div>
           <div>
            <img src={star} alt="Звезда иконка" />
            <p>Грузовые и пассажирские</p>
          </div>
          <div>
            <img src={star} alt="Звезда иконка" />
            <p>Ведущие производители</p>
          </div>
        </div>
        <div className="photoLobby">
          <img src={img3} alt="lobby" />
          <img src={img4} alt="lobby" />
        </div>
      </div>
    </section>
  )
}

export default Lobby;