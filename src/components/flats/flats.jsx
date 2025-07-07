import React, {useState} from "react";
import "./flats.css";
import ModalFlat from "../ui/modalFlat";

import img from "./img/img (7).png";
import img1 from "./img/img (8).png";
import img2 from "./img/img (9).png";
import img3 from "./img/img (10).png";

function Flats() {
  const[openFlatModal, setOpenFlatModal] = useState(null);

  const flatModalHeaders = {
  flat1: "квартир со свободной планировкой",
  flat2: "квартир с дровяным камином",
  flat3: "квартир с собственной террасой",
  flat4: "квартир с увеличенной высотой потолка",
};

  function openModal(e, type) {
    e.preventDefault();
    setOpenFlatModal(type);
  }

  function closeModal() {
    setOpenFlatModal(null);
  }

  return (
    <section className="flatSection">
      <h1>Более 100 квартир свободных квартир <span>редких форматов</span></h1>
      <div className="flatBlock">
        <div className="flatText">
          <h4>
            Свободная планировка, возможность объединить
            квартиры <span>до 500 м²</span>
          </h4>
          <p>
            Не ограничивайте себя при создании жилого пространства
            Вашей мечты, воспользуйтесь возможностью увеличения
            площади до комфортного Вам размера
          </p>
          <a href="#" onClick={(e) => openModal(e, img)}>Узнать стоимость →</a>
        </div>
        <img src={img} alt="Квартира" />
      </div>
      <div className="flatBlock">
        <div className="flatText">
          <h4>
            Настоящий <br /> дровяной камин 
          </h4>
          <p>
            В пентхаусах предусмотрен дымоход с возможностью установки камина, 
            чтобы Вы получали наслаждение от живого тепла в холодное время года
          </p>
          <a href="#" onClick={(e) => openModal(e, img1)}>Узнать стоимость →</a>
        </div>
        <img src={img1} alt="Камин" />
      </div>
      <div className="flatBlock">
        <div className="flatText">
          <h4>
            Собственная <br /> терраса до 17 м²
          </h4>
          <p>
            Современная террасса 
            с необыкновенными видами 
            на благоустроенную набережную, 
            МГУ им. М.В. Ломоносова и Воробьевы горы
          </p>
          <a href="#" onClick={(e) => openModal(e, img2)}>Узнать стоимость →</a>
        </div>
        <img src={img2} alt="Квартира снаружи" />
      </div>
      <div className="flatBlock">
        <div className="flatText">
          <h4>
            Увеличенная <br /> высота потолка
          </h4>
          <p>
            Почувствуйте простор помещений в полной мере 
            с увеличенной высотой потолка 4,2 м
          </p>
          <a href="#" onClick={(e) => openModal(e, img3)}>Узнать стоимость →</a>
        </div>
        <img src={img3} alt="Квартира" />
      </div>
      {openFlatModal && (
        <ModalFlat
          headerText={flatModalHeaders[openFlatModal]}
          closeModal={closeModal}
        />
      )}
    </section>
  )
}

export default Flats