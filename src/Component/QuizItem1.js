import React, { useState } from "react";


function QuizItem1(props) {
//  const[count, setCount]=useState(0)
// const handleSubmitBtn=()=>{
// setCount(count+1)
// console.log(count);
// }

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <p className="card-text">{props.question}</p>
            <fieldset id={props.id}>
              {props.answers.map((item) => (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={props.id}
                    id={item}
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor={item}>
                    {item}
                  </label>
                </div>
              ))}
            </fieldset>
          </div>
        </div>
        <button type='submit' className="btn btn-dark btn-sm  my-3">Submit</button>

      </div>
      
   
    </>
  );
}

export default QuizItem1;
