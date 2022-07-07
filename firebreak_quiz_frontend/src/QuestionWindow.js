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
        <h2>This is a question you will answer</h2>
      );
    }
  }

export default QuestionWindow;