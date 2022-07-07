import React from 'react';

class AnswerButton extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return (
        <h2>This is a possible answer to the question</h2>
      );
    }
  }

export default AnswerButton;