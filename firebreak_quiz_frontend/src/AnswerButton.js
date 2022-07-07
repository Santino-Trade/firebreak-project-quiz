import React from 'react';

class AnswerButton extends React.Component {
    constructor() {
      super();
      this.state = {
          selected: false
        };
    }

    submitAnswer = () => {
        if (this.state.selected) {
            this.setState({selected: false})
        }
        else {
            this.setState({selected: true})
        }
    }

    render() {
      return (
        <button
            type="button"
            onClick={this.submitAnswer}
        >{this.props.answerText}</button>
      );
    }
  }

export default AnswerButton;