import React from 'react';

class ScoreCounter extends React.Component {
    constructor() {
      super();
      this.state = {
        score: 0
      };
    }
    render() {
      return (
        <div>
          <h2>Score:</h2>
          <p>{this.state.score}</p>
        </div>
      );
    }
  }

export default ScoreCounter;