import { useState } from "react";
import "./App.css";
import questions from "./assets/questions.json";
import Questions from "./components/Questions";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>World Quiz</h1>
        {currentQuestion < questions.length && (
          <Questions
            question={questions[currentQuestion]}
            onAnswerClick={handleNextQuestion}
          />
        )}
        {currentQuestion === questions.length && (
          <Result
            userAnswers={userAnswers}
            questions={questions}
            resetQuiz={resetQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;
