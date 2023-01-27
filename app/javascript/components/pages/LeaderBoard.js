import React from "react";
import { Table } from "reactstrap";

const LeaderBoard = ({ metrics }) => {
  const leaderboard = metrics?.slice(0, 10);
  const names = users.find((user) => user.id === metrics.user_id)

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
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{names.username}</td>
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
