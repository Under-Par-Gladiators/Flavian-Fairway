import React from "react";
import { Table } from "reactstrap";

const LeaderBoard = () => {
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>13</td>
            <td>32mph</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>12</td>
            <td>31mph</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>11</td>
            <td>27mph</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mark</td>
            <td>10</td>
            <td>26mph</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>9</td>
            <td>24mph</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Larry</td>
            <td>9</td>
            <td>23mph</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Mark</td>
            <td>8</td>
            <td>20mph</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Jacob</td>
            <td>7</td>
            <td>18mph</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Larry</td>
            <td>7</td>
            <td>18mph</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Larry</td>
            <td>6</td>
            <td>17mph</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default LeaderBoard;
