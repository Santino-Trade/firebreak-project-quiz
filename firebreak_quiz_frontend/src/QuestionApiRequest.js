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
            let questionId = response.data[i].id
            let questionContent = response.data[i].title
            const question = {id:questionId, text:questionContent}
            questionList.push(question);
          }
        })

        return questionList
    }

  }

export default QuestionApiRequest;