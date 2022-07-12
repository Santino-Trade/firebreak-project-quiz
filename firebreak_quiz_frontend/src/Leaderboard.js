import React, { useState, useEffect } from 'react';
import './Leaderboard.css';
import axios from "axios";

function Leaderboard() {

    const [scoresList, setScoresList] = useState([]);

    useEffect(() => {
      let scoreList = []
      axios.get("http://localhost:8000/api/scores/").then(function (response) {
          for (var i = 0; i < response.data.length; i++) {
              let playerName = response.data[i].name
              let playerScore = response.data[i].final_score
              let leaderboardRow = [playerName, playerScore]
              scoreList.push(leaderboardRow);
          }
        }).then(function () {
            setScoresList(scoreList)
        })
    }, []);

    function renderTableData() {
        return scoresList.map((entries, index) => {
            return (
               <tr>
                    {entries.map((detail, detailIndex) => {
                        return <td>{detail}</td>
                    })}
               </tr>
            )
         })
    }

    return (
        <div className="Leaderboard-Container">
            <table>
                <tbody>
                    <tr>
                        <th>Player - Score</th>
                    </tr>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
      );
}
export default Leaderboard;