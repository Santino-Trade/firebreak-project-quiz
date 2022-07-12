import React, { useState, useEffect } from 'react';
import './App.css';
import QuestionPage from './QuestionPage';
import QuestionApiRequest from './QuestionApiRequest';
import AnswersApiRequest from './AnswersApiRequest';
import axios from "axios";

//class App extends React.Component {
function App() {

  // https://reactjs.org/docs/hooks-overview.html
  const [inGame, setInGame] = useState("Initial");
  const [buttonText, setButtonText] = useState("Start Quiz");
  const [quizList, setQuizList] = useState([]);

  //https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    const questionRequest = new QuestionApiRequest()
    let questionDict = questionRequest.randomQuestions()
    setQuizList(questionDict)
  }, []);

  function handleStartButtonClick() {
    if (inGame == "Initial"){
      setInGame("Inplay");
      setButtonText("Restart Quiz");
    }
    else if (inGame == "Inplay") {
      setInGame("Initial");
      setButtonText("Start Quiz");
    }
  }

  return (
    <div>
      <button
        className={"Start-Quiz-Button-" + inGame}
        type="button"
        onClick={
          () => handleStartButtonClick()
        }
      >{buttonText}</button>

      <div className="Quiz-Game-Wrapper">
        {inGame === "Inplay" ? <QuestionPage quizList={quizList} /> : ''}
      </div>
    </div>
  );

}

export default App;
