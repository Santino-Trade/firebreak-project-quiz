import React, { useState, useEffect } from 'react';
import axios from "axios";
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.value);
      //
        console.log(this.props.score)
        axios.post('http://localhost:8000/api/scores/', {
            name: this.state.value,
            final_score: this.props.score,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
              <label className="Name-Input">
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <div className="Leaderboard-Container">
            </div>
        </div>
      );
    }
  }
  export default NameForm;