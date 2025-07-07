import React, { useState } from "react";
import "./question.css";

import flat from "../img/img.png";
import pent from "../img/img (1).png";

function QuestionOne({ onNext, onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleChoice = (value) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className="testContainer">
      <div className="paginationContainer">
        <div className="line activeLine" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <h2>Какая недвижимость вас интересует?</h2>

      <div className="cardsContainer">
        <label className="card">
          <div className="picBlock">
          <img src={flat} alt="Квартира" />
          <input
            type="radio"
            name="property"
            checked={selected === "1"}
            onChange={() => handleChoice("1")}
            className="radioInput"
          />
          <span className="checkmark" />
        </div>
          <p>Квартиры</p>
        </label>

        <label className="card">
          <div className="picBlock">
          <img src={pent} alt="Пентхаус" />
          <input
            type="radio"
            name="property"
            checked={selected === "2"}
            onChange={() => handleChoice("2")}
            className="radioInput"
          />
          <span className="checkmark" />
        </div>
          <p>Пентхаусы</p>
        </label>
      </div>

      <button className="nextBtn" onClick={onNext} disabled={!selected}>
        Дальше
      </button>
    </div>
  );
}

export default QuestionOne;
