import React from "react";
import { useNavigate } from "react-router-dom";
import "./testIntro.css";
import leftPic from "./img/Group 10144.png";
import rightPic from "./img/Group 10145.png";

function TestIntro() {
  const navigate = useNavigate();

  return (
    <section className="testSection">
    <div className="testContainer">
        <h2>Какая квартира <br />подойдет именно вам?</h2>
        <p>
          Ответьте на 4 вопроса, чтобы подобрать
          идеальный вариант недвижимости
        </p>
      <button onClick={() => navigate("/test/q1")}>Пройти тест</button>
      <div className="picContainer">
        <img src={leftPic} alt="" />
        <img src={rightPic} className="secondPic" alt="" />
      </div>
    </div>
    </section>
  );
}

export default TestIntro;
