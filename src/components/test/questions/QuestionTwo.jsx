import React, { useState } from "react";
import "./question.css";

import plan1 from "../img/img (2).png";
import plan2 from "../img/img (3).png";
import plan3 from "../img/img (4).png";

function QuestionTwo({ onNext, onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleChoice = (value) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className="testContainer">
      <div className="paginationContainer">
        <div className="line" />
        <div className="line activeLine" />
        <div className="line" />
        <div className="line" />
      </div>

      <h2>Какая планировка вас интересует?</h2>

      <div className="cardsContainer extraStyle">
        <label className="card">
          <div className="picBlock">
            <img src={plan1} alt="Студия" />
            <input
              type="radio"
              name="property"
              checked={selected === "1"}
              onChange={() => handleChoice("1")}
              className="radioInput"
            />
            <span className="checkmark" />
          </div>
          <p>Студия</p>
        </label>

        <label className="card">
          <div className="picBlock">
            <img src={plan2} alt="1-2 спальни" />
            <input
              type="radio"
              name="property"
              checked={selected === "2"}
              onChange={() => handleChoice("2")}
              className="radioInput"
            />
            <span className="checkmark" />
          </div>
          <p>1–2 спальни</p>
        </label>

        <label className="card">
          <div className="picBlock">
            <img src={plan3} alt="3-4 спальни" />
            <input
              type="radio"
              name="property"
              checked={selected === "3"}
              onChange={() => handleChoice("3")}
              className="radioInput"
            />
            <span className="checkmark" />
          </div>
          <p>3–4 спальни</p>
        </label>
      </div>

      <button className="nextBtn" onClick={onNext} disabled={!selected}>
        Дальше
      </button>
    </div>
  );
}

export default QuestionTwo;
