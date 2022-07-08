import logo from './logo.svg';
import './App.css';
import AnswerButton from './AnswerButton.js';
import QuestionWindow from './QuestionWindow';
import ScoreCounter from './ScoreCounter';
import QuestionApiRequest from './QuestionApiRequest';

function App() {

  // This is where we would do code to get the answers & questions from the api
  // but the code would be in another file so it can be re-used

  var questionText = "This is the question, blah blah"
  var questionNumber = 1
  const questionRequest = new QuestionApiRequest()
  question = questionRequest.randomQuestion()


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
          <QuestionWindow questionText={questionText} questionNumber={questionNumber}/>
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

export default App;
