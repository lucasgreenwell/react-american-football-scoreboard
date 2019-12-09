//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
// import Score from './components/score.js'

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.
  //  You'll need one for the home score and another for the away score.

  const [team1, setTeam1] = useState("sky socks");
  const [team2, setTeam2] = useState("Jeffs Team");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const homeScoreClick = () => {
    setHomeScore(homeScore + 7);
  };

  const homeScoreField = () => {
    setHomeScore(homeScore + 3);
  };

  const awayScoreClick = () => {
    setAwayScore(awayScore + 7);
  };

  const awayScoreField = () => {
    setAwayScore(awayScore + 3);
  };

  // React.useEffect(() => {
  //   setTeam1("Hellfire");
  // }, []);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{team1}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{team2}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <Score
            props={{
              homeScoreClick: () => {
                return setHomeScore(homeScore + 7);
              },
              homeScoreField: () => {
                return setHomeScore(homeScore + 3);
              }

            }}
          /> */}
          <div className="homeButtons">
            <button className="homeButtons__touchdown" onClick={homeScoreClick}>
              Home Touchdown
            </button>
            <button className="homeButtons__fieldGoal" onClick={homeScoreField}>
              Home Field Goal
            </button>
          </div>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayScoreClick}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={awayScoreField}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
