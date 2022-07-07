import React from 'react';
import './QuestionWindow.css';

class QuestionWindow extends React.Component {
    constructor() {
      super();
      this.state = {
        question: "The question text goes here",
        points: 1
      };
    }
    render() {
      return (
        <div>
          <h2 className="Question-Heading">Question {this.props.questionNumber}</h2>
          <p className="Question-Worth">is worth {this.state.points} point(s)...</p>
          <p className="Question-Text">{this.props.questionText}</p>
        </div>
      );
    }
  }

export default QuestionWindow;