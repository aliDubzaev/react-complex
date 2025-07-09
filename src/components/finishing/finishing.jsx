import React from "react";
import "./finishing.css";

import pic3 from "./img/Frame 1953.png";
import pic1 from "./img/Frame 1956.png";
import pic2 from "./img/image 210.png";

function Finishing() {
  return (
    <section className="finishingSection">
      <h1>Отделка от застройщика</h1>
      <h6>Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой</h6>
      <div className="cardsContainer">
        <div className="cardBlock">
          <img src={pic1} alt="отделка" />
          <h5>Готовый <br /> дизайн-проект</h5>
          <p>
            Воспользуйтесь возможностью сразу же заняться
            меблировкой и благоустройством новой квартиры,
            как только получите ключи
          </p>
        </div>
        <div className="cardBlock">
          <img src={pic2} alt="отделка" />
          <h5>Чистота и тишина, без шума и пыли</h5>
          <p>
            Забудьте шум от "бесконечного ремонта" соседей 
            и лифт, декорированный защитными материалами
          </p>
        </div>
        <div className="cardBlock">
          <img src={pic3} alt="отделка" />
          <h5>Выгода за счет <br /> оптовых закупок</h5>
          <p>
            Благодаря оптовым закупкам застройщика,
            вы получаете возможность сэкономить на стоимости
            ремонта
          </p>
        </div>
      </div>
    </section>
  )
}

export default Finishing;