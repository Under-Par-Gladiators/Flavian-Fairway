import React from 'react'
import { Button } from 'reactstrap'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Button><a href="/leaderboard">LeaderBoard</a></Button>
      <Button><a href="/competitive">Competition</a></Button>
      <h3>Description of app</h3>

    </div>
  )
}

export default Home