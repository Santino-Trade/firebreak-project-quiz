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
  const [answersList, setAnswersList] = useState([]);

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
        {inGame === "Inplay" ? <QuestionPage quizList={quizList} answersList={[[["test",false],["test2",false],["test3",false],["test4",true]],[["test5",true],["test6",false],["test7",false],["test8",false]],[["test9",false],["test10",false],["test11",true],["test12",false]],]} /> : ''}
      </div>
    </div>
  );

}

export default App;
