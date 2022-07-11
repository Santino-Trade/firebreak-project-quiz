import React, { useState, useEffect } from 'react';
import axios from "axios";


class AnswersApiRequest extends React.Component {
  constructor() {
    super();
    this.state = {
      };
  }

  getMeAnswers = () => {
    var answerList = []
    //https://reactjs.org/docs/hooks-effect.html
    //useEffect(() => {
      
      let questionId = this.props.id
      axios.get("http://localhost:8000/api/questions/"+questionId+"/answers/").then(function (response) {
        for (var i = 0; i < 4; i++) {
          answerList.push(response.data[i])
          //if (response.data[i]["correct"] == true) {
          //  setCorrectAnswer(response.data[i]["answer"])
          //}
        }
        //setAnswerOneText(answerList[0]["answer"])
        //setAnswerTwoText(answerList[1]["answer"])
        //setAnswerThreeText(answerList[2]["answer"])
        //setAnswerFourText(answerList[3]["answer"])
        //console.log(answerList)
      })

    //}, []);

  console.log(answerList)
  return answerList
  }
}

export default AnswersApiRequest;