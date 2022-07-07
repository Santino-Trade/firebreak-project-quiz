import logo from './logo.svg';
import './App.css';
import AnswerButton from './AnswerButton.js';
import QuestionWindow from './QuestionWindow';
import ScoreCounter from './ScoreCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Changes
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <QuestionWindow/> <ScoreCounter/>
        <AnswerButton/>
        <AnswerButton/>
        <AnswerButton/>
        <AnswerButton/>
      </header>
    </div>
  );
}

export default App;
