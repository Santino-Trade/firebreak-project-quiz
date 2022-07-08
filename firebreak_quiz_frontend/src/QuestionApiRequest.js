import React from 'react';
import axios from "axios";

class QuestionApiRequest extends React.Component {
    constructor() {
      super();
      this.state = {
        };
    }

    randomQuestion = () => {
        // Call the API for a random question
        axios.get("http://localhost:8000/api/todos/")
        return "A question"
    }

  }

export default QuestionApiRequest;