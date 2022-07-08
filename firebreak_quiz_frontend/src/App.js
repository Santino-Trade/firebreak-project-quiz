import React from 'react';
import './App.css';
import QuestionPage from './QuestionPage';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentView: 1,
      buttonState: "Initial",
      buttonText: "Start Quiz",
      buttonDestination: 2,
    };
  }

  setCurrentView(viewNumber) {
    if (viewNumber == 2) {
      this.setState({
        currentView: 2,
        buttonState: "Inplay",
        buttonText: "Restart Quiz",
        buttonDestination: 1
      });
    }
    else {
      this.setState({
        currentView: 1,
        buttonState: "Initial",
        buttonText: "Start Quiz",
        buttonDestination: 2
      });
    }
  }

  render() {
    return (
      <div className= "App">
        <div className={"Start-Button-Wrapper-" + this.state.buttonState}>
          <button
              className={"Start-Quiz-Button-" + this.state.buttonState}
              type="button"
              // If this is not a specific function call, we get an endless loop
              onClick={() => this.setCurrentView(this.state.buttonDestination)}
          >{this.state.buttonText}</button>
        </div>
        <div className="Quiz-Game-Wrapper">
          {this.state.currentView === 2 ? <QuestionPage/> : ''}
        </div>
      </div>
    );
  }

}

export default App;
