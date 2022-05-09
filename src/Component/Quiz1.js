import React, { useEffect, useState } from "react";
import QuizItem1 from "./QuizItem1";


const Quiz1 = (props) => {
  const [que, setQue] = useState([]);

  const getQuestion = async () => {
    let url = `https://the-trivia-api.com/api/questions?limit=${props.number}`;
    const response = await fetch(url);
    setQue(await response.json());
  };

  useEffect(() => {
    getQuestion();
  }, [props.number]);

  return (
    <>
      <div className="container my-3">
        <div className="row">
          {que.map((element) => {
            console.log(element);
            let ans = (
              element.correctAnswer +
              "," +
              element.incorrectAnswers
            ).split(",");
            let currentIndex = ans.length,
              randomIndex;
            while (currentIndex !== 0) {
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              [ans[currentIndex], ans[randomIndex]] = [
                ans[randomIndex],
                ans[currentIndex],
              ];
            }
            element["answers"] = ans;
            return (
              <div className="container my-3">
                <QuizItem1
                  question={element.question}
                  answers={element.answers}
                  key={element.id}
                  id={element.id}
                  correctAnswer={element.correctAnswer}
                />
                
                
     
                 
              </div>
            );
          })
          }
        </div>
       
      </div>
     
    </>
  );
};
export default Quiz1;
