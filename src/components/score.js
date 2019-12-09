import React from 'react'

const Score = () => {
    return (
        <div>
            <button className="homeButtons__touchdown" onClick={homeScoreClick}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={homeScoreField}>
            Home Field Goal
          </button>
        </div>
    );
}

export default Score;