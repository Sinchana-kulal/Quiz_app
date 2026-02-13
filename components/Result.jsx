import React from "react";
import questions from "../data";

function Result({ selectedAnswers, restartQuiz }) {
  let score = 0;

  return (
    <div className="result-card">
      <h2>Quiz Result</h2>

      {questions.map((q, index) => {
        const userAnswer = selectedAnswers[index];
        const correctAnswer = q.answer;

        if (userAnswer === correctAnswer) {
          score++;
        }

        return (
          <div key={index}>
            <p><strong>Question:</strong> {q.question}</p>

            <p>
              Your Answer: {userAnswer || "Not Answered"}
            </p>

            {/* Show correct answer ONLY if wrong */}
            {userAnswer !== correctAnswer && (
              <p style={{ color: "red" }}>
                Correct Answer: {correctAnswer}
              </p>
            )}

            <hr />
          </div>
        );
      })}

      <h3>
        Your Score: {score} / {questions.length}
      </h3>

      <button onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
