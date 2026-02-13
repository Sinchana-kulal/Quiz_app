import React, { useState } from "react";
import questions from "../data";
import Question from "./Question";
import Result from "./Result";

function Quiz() {
  // State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  // When option is clicked
  const handleOptionClick = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option
    });
  };

  // Next question
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  // Previous question
  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  // Submit quiz
  const handleSubmit = () => {
    setShowResult(true);
  };

  // Restart quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  // If quiz finished, show result
  if (showResult) {
    return (
      <Result
        selectedAnswers={selectedAnswers}
        restartQuiz={restartQuiz}
      />
    );
  }

  // Normal quiz screen
  return (
    <div className="quiz-card">
      <h1>Quiz App</h1>

      <Question
        data={questions[currentQuestion]}
        selectedAnswer={selectedAnswers[currentQuestion]}
        onSelect={handleOptionClick}
      />

      <div className="nav-buttons">
        {currentQuestion > 0 && (
          <button onClick={prevQuestion}>Previous</button>
        )}

        {currentQuestion < questions.length - 1 ? (
          <button onClick={nextQuestion}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
