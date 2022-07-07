import React from 'react';
import './ScoreCounter.css';

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
          <h2 className="Score-Heading">Score:</h2>
          <p className="Score-Number">{this.state.score}</p>
        </div>
      );
    }
  }

export default ScoreCounter;