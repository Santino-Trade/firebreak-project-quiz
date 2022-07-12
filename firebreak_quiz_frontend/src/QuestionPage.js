import React, { useState, useEffect } from 'react';
import './QuestionPage.css';
import AnswerButton from './AnswerButton.js';
import QuestionWindow from './QuestionWindow';
import ScoreCounter from './ScoreCounter';
import QuestionApiRequest from './QuestionApiRequest';
import AnswersApiRequest from './AnswersApiRequest';
import NameForm from './NameForm';
import Leaderboard from './Leaderboard';
import axios from "axios";

function QuestionPage(props) {

    // https://reactjs.org/docs/hooks-overview.html
    const [questionText, setQuestionText] = useState(props.quizList[0]["text"]);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [points, setPoints] = useState(0);

    const [answerOneText, setAnswerOneText] = useState("");
    const [answerTwoText, setAnswerTwoText] = useState("");
    const [answerThreeText, setAnswerThreeText] = useState("");
    const [answerFourText, setAnswerFourText] = useState("");

    const [correctAnswer, setCorrectAnswer] = useState("");

    const [result, setResult] = useState("Initial");
    const [completedQuiz, setCompletedQuiz] = useState(0);

    useEffect(() => {
      setAnswers(props.quizList[0]["id"])
    }, []);
 
    function submitAnswer(answerGiven) {
      if (answerGiven == correctAnswer) {
        let newScore = points + 1
        setPoints(newScore)
        setResult("Correct")
      }
      else {
        setResult("Wrong")
      }
    }

    function setAnswers(questionId) {
      let answersList = []
      let correctAnswer = ""
      axios.get("http://localhost:8000/api/questions/"+questionId+"/answers/").then(function (response) {
        for (var i = 0; i < 4; i++) {
          let answerContent = response.data[i].answer
          let answerCorrect = response.data[i].correct
          if (answerCorrect == true) {
            correctAnswer = answerContent
          }
          answersList.push(answerContent);
        }
      }).then(function () {
        setAnswerOneText(answersList[0])
        setAnswerTwoText(answersList[1])
        setAnswerThreeText(answersList[2])
        setAnswerFourText(answersList[3])
        setCorrectAnswer(correctAnswer)
      })
    }

    function clearOverlay() {
      const element = document.getElementById("Result-Overlay-"+result);
      element.classList.add('Result-Closer');

      if (props.quizList.length == questionNumber) {
        completeQuiz();
      }
      else {
        loadNextQuestion();
      }

      //Delay a second to play fade-out animation
      setTimeout(() => {
        setResult("Initial");
      }, 1000);
    }

    function loadNextQuestion() {
      // As the overlay is fading out, we want to load the next question

      setQuestionNumber(questionNumber + 1)

      setQuestionText(props.quizList[questionNumber]["text"])

      setAnswers(props.quizList[questionNumber]["id"])
    }

    function completeQuiz() {
      // Once the question number matches the quiz length, finish the quiz
      setCompletedQuiz(1)
    }

    if (completedQuiz==0) {
      return (
        <div className="App">
          <div className={"Result-Overlay-" + result} id={"Result-Overlay-" + result} onClick={() => clearOverlay()}>
            <p className="Result-Text">{result}!</p>
          </div>
          <header className="App-header">
            <ScoreCounter points={points}/>
          </header>
          <div className="Question-Container">
              <QuestionWindow questionText={questionText} questionNumber={questionNumber}/>
            </div>
            <div className="Answer-Container">
              <button
                className="Answer-Button"
                type="button"
                onClick={() => submitAnswer(answerOneText)}
              >{answerOneText}</button>
              <button
                className="Answer-Button"
                type="button"
                onClick={() => submitAnswer(answerTwoText)}
              >{answerTwoText}</button>
              <button
                className="Answer-Button"
                type="button"
                onClick={() => submitAnswer(answerThreeText)}
              >{answerThreeText}</button>
              <button
                className="Answer-Button"
                type="button"
                onClick={() => submitAnswer(answerFourText)}
              >{answerFourText}</button>
            </div>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <div className="Complete-Display">
            <p className="Complete-Text">Quiz Complete!</p>
            <p className="Final-Score-Text">Your final score was...</p>
            <p className="Final-Score">{points}</p>
            <NameForm score={points}/>
            <Leaderboard/>
          </div>
        </div>
      );
    }

}

export default QuestionPage;