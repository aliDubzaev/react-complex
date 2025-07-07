import React, { useState } from "react";
import "./question.css";

import square1 from "../img/img (5).png";
import square2 from "../img/img (6).png";
import square3 from "../img/img (7).png";

function QuestionThree({ onNext, onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleChoice = (value) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className="testContainer">
      <div className="paginationContainer">
        <div className="line" />
        <div className="line" />
        <div className="line activeLine" />
        <div className="line" />
      </div>

      <h2>Какую площадь объекта вы рассматриваете?</h2>

      <div className="cardsContainer">
        <label className="card">
          <div className="picBlock">
            <img src={square1} alt="до 50 м²" />
            <input
              type="radio"
              name="property"
              checked={selected === "1"}
              onChange={() => handleChoice("1")}
              className="radioInput"
            />
            <span className="checkmark" />
          </div>
          <p>До 50 м²</p>
        </label>

        <label className="card">
          <div className="picBlock">
            <img src={square2} alt="50–100 м²" />
            <input
              type="radio"
              name="property"
              checked={selected === "2"}
              onChange={() => handleChoice("2")}
              className="radioInput"
            />
            <span className="checkmark" />
          </div>
          <p>50–100 м²</p>
        </label>

        <label className="card">
          <div className="picBlock">
            <img src={square3} alt="Более 100 м²" />
            <input
              type="radio"
              name="property"
              checked={selected === "3"}
              onChange={() => handleChoice("3")}
              className="radioInput"
            />
            <span className="checkmark" />
          </div>
          <p>Более 100 м²</p>
        </label>
      </div>

      <button className="nextBtn" onClick={onNext} disabled={!selected}>
        Дальше
      </button>
    </div>
  );
}

export default QuestionThree;
