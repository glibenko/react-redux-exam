import React from 'react';
import { connect } from 'react-redux';

function Board({ score }) {
  return (
    <div>
      {score.map(user => (
        <div className="board" key={user.id}>
          <div className="img">
            <img src={user.avatarURL} alt={user.name} />
          </div>
          <div className="board-middle">
            <div className="board-name">{user.name}</div>
            <div className="board-text">Answered questions {user.answers}</div>
            <div className="board-text">Created questions {user.questions}</div>
          </div>
          <div className="board-right">
              <div className="board-right-name">Score</div>
              <div className="board-score">{user.score}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = ({ users }) => {
  const score = Object.keys(users.data).map(el => {
    const user = users.data[el];
    const answers = Object.keys(user.answers).length;
    const questions = user.questions.length;

    return {
      ...user,
      answers,
      questions,
      score: answers + questions
    }
  }).sort((a, b) => b.score - a.score);

  return {
    score
  }
};

export default connect(mapStateToProps)(Board)
