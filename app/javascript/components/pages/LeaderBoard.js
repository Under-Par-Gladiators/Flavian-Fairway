import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

const LeaderBoard = ({ metrics }) => {
  const leaderboard = metrics?.slice(0, 10);
  const [users, setUsers] = useState([])

  useEffect(() => {
    readUsers();
  }, []);

  const readUsers = () => {
    fetch("/usershow")
      .then((response) => response.json())
      .then((payload) => {
        setUsers(payload);
      })
      .catch((error) => console.log(error));
  };


  return (
    <div>
      <Table hover size="">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Wins</th>
            <th>Average Speed</th>
          </tr>
        </thead>

        <tbody>
          {leaderboard?.map((metric, index) => {
            const name = users?.find((user) => user.id === metric.user_id)
            return (
              <tr key={index}>
                <th scope="row" >{index + 1}</th>
                <td>{name?.username}</td>
                <td>{metric.wins}</td>
                <td>{metric.average_speed}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default LeaderBoard;
