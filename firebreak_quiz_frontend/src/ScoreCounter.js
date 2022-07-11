import React from 'react';
import './ScoreCounter.css';

function ScoreCounter(props) {

  return (
    <div>
      <h2 className="Score-Heading">Score:</h2>
      <p className="Score-Number">{props.points}</p>
    </div>
  );

}

export default ScoreCounter;