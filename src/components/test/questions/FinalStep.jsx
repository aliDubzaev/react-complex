import React, { useState } from "react";
import "./question.css";

import whats from "../img/whats.png";
import viber from "../img/viber.png";
import tg from "../img/tg.png";

function FinalStep({ onComplete }) {
  const [selected, setSelected] = useState(null);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected || phone.length < 10) return;
    setSubmitted(true);
    setTimeout(onComplete, 3000);
  };

  return (
    <div className="testContainer">
      <div className="paginationContainer">
        <div className="line activeLine" />
        <div className="line activeLine" />
        <div className="line activeLine" />
        <div className="line activeLine" />
      </div>

      <h2>Мы подобрали 4 варианта недвижимости по вашим параметрам. Куда их прислать?</h2>

      <div className="messengerOptions">
        <label className={`messengerCard ${selected === "tg" ? "selected" : ""}`}>
          <input
            type="radio"
            name="messenger"
            value="tg"
            className="messengerInput"
            onChange={() => setSelected("tg")}
            checked={selected === "tg"}
          />
          <img src={tg} alt="Telegram" />
          <span className="checkmark" />
        </label>

        <label className={`messengerCard ${selected === "wa" ? "selected" : ""}`}>
          <input
            type="radio"
            name="messenger"
            value="wa"
            className="messengerInput"
            onChange={() => setSelected("wa")}
            checked={selected === "wa"}
          />
          <img src={whats} alt="WhatsApp" />
          <span className="checkmark" />
        </label>

        <label className={`messengerCard ${selected === "vb" ? "selected" : ""}`}>
          <input
            type="radio"
            name="messenger"
            value="vb"
            className="messengerInput"
            onChange={() => setSelected("vb")}
            checked={selected === "vb"}
          />
          <img src={viber} alt="Viber" />
          <span className="checkmark" />
        </label>
      </div>

      <form className="phoneForm" onSubmit={handleSubmit}>
        <input
          className="phoneInput"
          type="tel"
          placeholder="+7 ___-___-__-__"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="nextBtn" type="submit" disabled={!selected || submitted}>
          Получить варианты
        </button>
      </form>

      {submitted && <p className="sendingMessage">Отправка...</p>}
    </div>
  );
}

export default FinalStep;
