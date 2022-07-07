import logo from './logo.svg';
import './App.css';
import AnswerButton from './AnswerButton.js';
import QuestionWindow from './QuestionWindow';
import ScoreCounter from './ScoreCounter';

function App() {

  // This is where we would do code to get the answers & questions from the api
  // but the code would be in another file so it can be re-used

  var questionText = "This is the question, blah blah"

  var answerOne = "Answer 1"
  var answerTwo = "Answer 2"
  var answerThree = "Answer 3"
  var answerFour = "Answer 4"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ScoreCounter/>
        <QuestionWindow questionText={questionText}/>
        <AnswerButton answerText={answerOne}/>
        <AnswerButton answerText={answerTwo}/>
        <AnswerButton answerText={answerThree}/>
        <AnswerButton answerText={answerFour}/>
      </header>
    </div>
  );
}

export default App;
