import React from "react";
import "./presentation.css";

import woman from "./img/woman.png";

function Presentation() {
  return (
    <section className="presentation">
      <div className="presentationWrapper">
        <div className="presentationText">
          <h5>Специально для вас</h5>
          <h1>Персональная <br/> презентация West Garden</h1>
          <ul>
            <li>Подробно расскажем про жилой комплекс</li>
            <li>Ознакомитесь со всеми планировками и ценами</li>
            <li>Прогуляетесь по благоустроенной набережной</li>
          </ul>
          <hr />
          <form className="presentationForm" onSubmit={(e) => e.preventDefault()}>
            <span className="formLabel">Закрепить за номером</span>
            <div className="inputGroup">
              <input
                type="tel"
                placeholder="+7 ___ ___ __ __"
                pattern="[0-9+ ]{10,}"
                title="Введите только цифры"
                required/>
              <button type="submit">Записаться на презентацию</button>
            </div>
            <p className="formNote">
              Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с{" "}
              <span className="privacy">политикой конфиденциальности</span>
            </p>
          </form>
        </div>

        <div className="presentationPhoto">
          <img src={woman} alt="Алёна Кирющенко" />
          <div className="photoCaption">
            <h6>Алёна Кирющенко</h6>
            <p>ведущий эксперт по недвижимости в ESTES</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
