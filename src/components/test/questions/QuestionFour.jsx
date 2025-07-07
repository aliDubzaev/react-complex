import React, { useState } from "react";
import "./question.css";

function QuestionFour({ onNext, onSelect }) {
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
        <div className="line" />
        <div className="line activeLine" />
      </div>

      <h2>Планируете ли вы использовать подземный паркинг?</h2>

      <div className="cardsContainer">
        <label className={`parkingCard ${selected === "1" ? "selected" : ""}`}>
          <input
            type="radio"
            name="parking"
            className="parkingRadio"
            checked={selected === "1"}
            onChange={() => handleChoice("1")}
          />
          <span className="parkingCheckmark" />
          <p>Да, планирую</p>
        </label>

        <label className={`parkingCard ${selected === "2" ? "selected" : ""}`}>
          <input
            type="radio"
            name="parking"
            className="parkingRadio"
            checked={selected === "2"}
            onChange={() => handleChoice("2")}
          />
          <span className="parkingCheckmark" />
          <p>Нет, не планирую</p>
        </label>
      </div>

      <button className="nextBtn" onClick={onNext} disabled={!selected}>
        Дальше
      </button>
    </div>
  );
}

export default QuestionFour;
