import React, { Component } from "react";

export class QuizItem extends Component {
  render() {
    let { question, answers } = this.props;

    return (
      <>
        <div className="container">
          <div className="card" style={{ width: "70rem" }}>
            <div className="card-body">
              <p className="card-text">{question}</p>

              {answers.map((item) => (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default QuizItem;
