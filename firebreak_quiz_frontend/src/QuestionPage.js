import React from 'react';
import './App.css';
import AnswerButton from './AnswerButton.js';
import QuestionWindow from './QuestionWindow';
import ScoreCounter from './ScoreCounter';
import QuestionApiRequest from './QuestionApiRequest';
import AnswersApiRequest from './AnswersApiRequest';

class QuestionPage extends React.Component {
    constructor() {
        super();
        this.state = {
          question: "The question text goes here",
          questionNumber: 1,
          questionList: [],
          points: 1,
          answerList: [],
          correctAnswer: "",
        };

        //this.getQuestionsList();
        console.log(this.state.questionList)
    }

    getQuestionsList() {
      const questionRequest = new QuestionApiRequest()
      //this.setState({
      //  questionList: questionRequest.randomQuestions()
      //});
    }

    getAnswersList(question) {
      const answerRequest = new QuestionApiRequest()
      this.setState({
        answerList: answerRequest.giveMeAnswers(question)
      });
    }

    render() {
        // This is where we would do code to get the answers & questions from the api
        // but the code would be in another file so it can be re-used

        if (this.state.questionNumber == 1) {
          () => this.getQuestionsList()
        }

        //Position of question in array is one less than question number
        var question = this.state.questionList[this.state.questionNumber-1]
        console.log(this.state.questionList)

        //answers = () => this.getAnswersList(question)

        var answerOne = "Answer 1"
        var answerTwo = "Answer 2"
        var answerThree = "Answer 3"
        var answerFour = "Answer 4"
        var answerCorrect = true

        return (
            <div className="App">
              <header className="App-header">
                <ScoreCounter/>
              </header>
              <div className="Question-Container">
                  <QuestionWindow questionText={question} questionNumber={this.state.questionNumber}/>
                </div>
                <div className="Answer-Container">
                  <AnswerButton answerText={answerOne} is_correct={answerCorrect}/>
                  <AnswerButton answerText={answerTwo} is_correct={answerCorrect}/>
                  <AnswerButton answerText={answerThree} is_correct={answerCorrect}/>
                  <AnswerButton answerText={answerFour} is_correct={answerCorrect}/>
                </div>
            </div>
          );
    }
  }

export default QuestionPage;