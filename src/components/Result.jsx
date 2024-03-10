const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} questions
      </p>
      <button onClick={resetQuiz}>Reset</button>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index + 1}. {question.question}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
