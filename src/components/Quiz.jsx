import { useEffect, useState } from "react";
import "../styles/quiz.css";

export const Quiz = ({ question, answers = [] }) => {
  const rightAnswer = "React.js";
  const [answerSheet, setAnswerSheet] = useState([
    ...Array(answers.length).fill(""),
  ]);

  const handleButtonClick = (index, event) => {
    const answer = answers.filter((ans) => console.log(ans));

    // console.log(answer);
    // setAnswerSheet([...answerSheet, (answerSheet[index] = answer)]);
  };

  useEffect(() => {
    console.log(answerSheet);
  }, [answerSheet]);
  return (
    <div className="quiz_container">
      <div className="wrapper">
        <h2 className="quiz_question">{question}</h2>
        <div className="grid grid-four-column">
          {answers.map((ans, index) => {
            return (
              <button
                key={index}
                className="quiz_answer"
                onClick={(e) => handleButtonClick(index, e)}>
                {ans}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
