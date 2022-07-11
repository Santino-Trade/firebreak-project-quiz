import React, { useState, useEffect } from 'react';
import './QuestionPage.css';
import AnswerButton from './AnswerButton.js';
import QuestionWindow from './QuestionWindow';
import ScoreCounter from './ScoreCounter';
import QuestionApiRequest from './QuestionApiRequest';

function QuestionPage(props) {

    // https://reactjs.org/docs/hooks-overview.html
    const [questionText, setQuestionText] = useState(props.quizList[0]);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [points, setPoints] = useState(0);

    let initialAnswersList = props.answersList[0]
    const [answerOneText, setAnswerOneText] = useState(initialAnswersList[0]);
    const [answerTwoText, setAnswerTwoText] = useState(initialAnswersList[1]);
    const [answerThreeText, setAnswerThreeText] = useState(initialAnswersList[2]);
    const [answerFourText, setAnswerFourText] = useState(initialAnswersList[3]);

    const [correctAnswer, setCorrectAnswer] = useState(answerOneText);

    const [result, setResult] = useState("Initial");

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

    function clearOverlay() {
      const element = document.getElementById("Result-Overlay-"+result);
      element.classList.add('Result-Closer');

      loadNextQuestion();

      //Delay a second to play fade-out animation
      setTimeout(() => {
        setResult("Initial");
      }, 1000);
    }

    function loadNextQuestion() {
      // As the overlay is fading out, we want to load the next question

      setQuestionNumber(questionNumber + 1)

      setQuestionText(props.quizList[questionNumber])

      let nextAnswersList = props.answersList[questionNumber]
      setAnswerOneText(nextAnswersList[0])
      setAnswerTwoText(nextAnswersList[1])
      setAnswerThreeText(nextAnswersList[2])
      setAnswerFourText(nextAnswersList[3])
      setCorrectAnswer(answerOneText)
    }

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

export default QuestionPage;