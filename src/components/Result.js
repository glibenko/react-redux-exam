import React from 'react';

function Result({ text, percent, votes, allVotes, chosen }) {
  const bg = `linear-gradient(90deg, #4fc719 0%, #4fc719 ${percent}%, #ccc ${percent}%, #ccc 100%)`;
  return (
    <div className="res">
      {chosen && <div className="lable-vote"> Your Vote </div>}
      <div>Would You Rather {text}</div>
      <div className="line" style={{background: bg}}>{percent}%</div>
      <div>{votes} out of {allVotes} votes</div>
    </div>
  )
}

export default Result
