import React from 'react';
import './AnswerButton.css';

class AnswerButton extends React.Component {
    constructor() {
      super();
      this.state = {
          selected: false
        };
    }

    submitAnswer = () => {
        if (this.props.answerCorrect) {
            //do something fun
        }
        else {
            //do something rubbish
        }
        // increment score counter
        // load the next question
    }

    render() {
      return (
        <button
            className="Answer-Button"
            type="button"
            onClick={this.submitAnswer}
        >{this.props.answerText}</button>
      );
    }
  }

export default AnswerButton;