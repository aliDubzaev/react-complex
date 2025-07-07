import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import QuestionOne from "./questions/QuestionOne";
import QuestionTwo from "./questions/QuestionTwo";
import QuestionThree from "./questions/QuestionThree";
import QuestionFour from "./questions/QuestionFour";
import FinalStep from "./questions/FinalStep";

function TestMain() {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  return (
    <Routes>
      <Route path="q1" element={
        <QuestionOne onNext={() => navigate("/test/q2")} onSelect={(val) => handleAnswer("q1", val)} />
      } />
      <Route path="q2" element={
        <QuestionTwo onNext={() => navigate("/test/q3")} onPrev={() => navigate("/test/q1")} onSelect={(val) => handleAnswer("q2", val)} />
      } />
      <Route path="q3" element={
        <QuestionThree onNext={() => navigate("/test/q4")} onPrev={() => navigate("/test/q2")} onSelect={(val) => handleAnswer("q3", val)} />
      } />
      <Route path="q4" element={
        <QuestionFour onNext={() => navigate("/test/final")} onPrev={() => navigate("/test/q3")} onSelect={(val) => handleAnswer("q4", val)} />
      } />
      <Route path="final" element={
        <FinalStep onComplete={() => navigate("/")} />
      } />
    </Routes>
  );
}

export default TestMain;
