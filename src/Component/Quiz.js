import React, { Component } from "react";
import QuizItem from "./QuizItem";

export class Quiz extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      status: false,
    };
  }
  // setTimeout(() => {
    
  // }, 0);
 async fetchApi() {
 
  let url=`https://the-trivia-api.com/api/questions?limit=${this.props.num}`;
  let data=await fetch(url);
  let parseData= await data.json();
  this.setState({
      articles: parseData, 
  })}

    
  
// myTimeout = setTimeout(this.fetchApi, 5000);

   
    componentDidMount(){
        this.fetchApi();
    
    }
            

  render() {
      
   
    return (
      <>
        <div className="container my-3">
          <div className="row">
            {this.state.articles.map((element) => {
              let ans = ( element.correctAnswer + "," +element.incorrectAnswers ).split(",");
                    let currentIndex = ans.length,  randomIndex;
                    while (currentIndex !== 0) {
                  
                      // Pick a remaining element.
                      randomIndex = Math.floor(Math.random() * currentIndex);
                      currentIndex--;
                  
                      // And swap it with the current element.
                      [ans[currentIndex], ans[randomIndex]] = [
                        ans[randomIndex], ans[currentIndex]];
                    }

                    element['answers'] = ans;
              return (
                <div className="container my-3"  >
                  <QuizItem question={element.question} answers={element.answers} key={element.id} />
                </div>
              );
            })}
          </div>
          <button className="btn btn-primary " >Submit</button>
        </div>
      </>
    );
  }
}

export default Quiz;
