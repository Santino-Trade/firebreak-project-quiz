import React from 'react';
import axios from "axios";

class AnswersApiRequest extends React.Component {
    constructor() {
      super();
      this.state = {
        };
    }

    giveMeAnswers = (question) => {
      // Call the API for a random list of questions
      var answerList = []

      axios.get("http://localhost:8000/api/questions/").then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          console.log(response.data[i].title)
          answerList.push(response.data[i].title)
        }
      })

      return answerList
  }

  }

export default AnswersApiRequest;