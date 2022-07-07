import React from 'react';

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
          <h2>Question #</h2>
          <p>is worth {this.state.points} point(s)...</p>
          <p>{this.props.questionText}</p>
        </div>
      );
    }
  }

export default QuestionWindow;