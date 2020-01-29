import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';

function PollPage({ poll, score, user }) {

  console.log('poll', poll, score)

  if (poll) {
    return <Question {...poll} poll />
  }

  const bg = `linear-gradient(90deg, #4fc719 0%, #4fc719 ${score.PercentOne}%, #fff ${score.PercentOne}%, #fff 100%)`;

  return (
    <div className="question">
      <div className="name">{user.name} asks?</div>
      <div style={{ display: 'flex'}}>
        <div className="img">
          <img src={user.avatarURL} alt={user.name} />
        </div>
        <div style={{ width: '100%'}}>
          <div>Results:</div>
          <div>
            <div>Would You Rather {score.optionOne.text}</div>
            <div style={{background: bg}}>{score.PercentOne}%</div>
            <div>{score.optionOne.votes.length} out of {score.allVotes} votes</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users, questions, authedUser }, { match }) => {
  const user = users.data[authedUser];
  const { id } = match.params;
  const answered = Object.keys(user.answers).includes(id);
  const question = questions.data[id];
  console.log('answered', answered)

  if (!answered) {
    return { poll: question };
  }

  const optionOne = question.optionOne.votes.length;
  const optionTwo = question.optionTwo.votes.length;

  const allVotes = optionOne + optionTwo;
  const PercentOne = optionOne * 100 / allVotes;
  const PercentTwo = optionTwo * 100 / allVotes;


  return {
    score: { ...question, userVote: user.answers[id], allVotes, PercentOne, PercentTwo},
    user: users.data[question.author]
  }
}

export default connect(mapStateToProps)(PollPage);
