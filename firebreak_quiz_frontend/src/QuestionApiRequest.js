import React from 'react';
import axios from "axios";

class QuestionApiRequest extends React.Component {
    constructor() {
      super();
      this.state = {
        };
    }

    randomQuestions = () => {
        // Call the API for a random list of questions
        var questionList = []

        axios.get("http://localhost:8000/api/questions/").then(function (response) {
          for (var i = 0; i < response.data.length; i++) {
            questionList.push(response.data[i].title)
          }
        })

        return questionList
    }

  }

export default QuestionApiRequest;