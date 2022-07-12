import React, { useState, useEffect } from 'react';
import './Leaderboard.css';
import axios from "axios";

function Leaderboard(props) {

    const [scoresList, setScoresList] = useState([]);

    useEffect(() => {
      let scoreList = []
      axios.get("http://localhost:8000/api/scores/").then(function (response) {
          for (var i = 0; i < response.data.length; i++) {
              let playerName = response.data[i].name
              let playerScore = response.data[i].final_score
              let leaderboardRow = [playerName, playerScore]
              //let leaderboardRow = "<tr><td>" + playerName + "</td><td>" + playerScore + "</td><tr>" 
              scoreList.append(leaderboardRow);
              scoreList = scoreList.concat(leaderboardRow)
          }
        }).then(function () {
            setScoresList(scoreList)
            console.log(scoreList)
        })
    }, []);

    renderTableData = () => {
        return scoresList.map((scoreLine, index) => {
            const {id, name, score} = scoreLine //destructuring
            return (
               <tr key={id}>
                  <td>{name}</td>
                  <td>{score}</td>
               </tr>
            )
         })
    }


    return (
        <div className="Leaderboard-Container">
            <table>
                <tbody>
                    <tr>
                        <th>Player -</th>
                        <th>Score -</th>
                    </tr>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
      );
}
export default Leaderboard;