import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Result from './Result';

function PollPage({ poll, score, user, show404 }) {
  if (show404) {
    return <div className="page404">404 - question not found</div>
  }

  if (poll) {
    return <Question {...poll} poll />
  }

  return (
    <div className="question">
      <div className="name">{user.name} asks?</div>
      <div style={{ display: 'flex'}}>
        <div className="img">
          <img src={user.avatarURL} alt={user.name} />
        </div>
        <div style={{ width: '100%'}}>
          <div className="res-name">Results:</div>
          <Result
            chosen={score.userVote === 'optionOne'}
            text={score.optionOne.text}
            percent={score.PercentOne}
            allVotes={score.allVotes}
            votes={score.optionOne.votes.length}
          />
          <Result
            chosen={score.userVote === 'optionTwo'}
            text={score.optionTwo.text}
            percent={score.PercentTwo}
            allVotes={score.allVotes}
            votes={score.optionTwo.votes.length}
          />
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
  if (!question) {
    return { show404: true }
  }

  if (!answered) {
    return { poll: question };
  }

  const optionOne = question.optionOne.votes.length;
  const optionTwo = question.optionTwo.votes.length;

  const allVotes = optionOne + optionTwo;
  const PercentOne = Math.ceil(optionOne * 100 / allVotes);
  const PercentTwo = Math.ceil(optionTwo * 100 / allVotes);


  return {
    score: { ...question, userVote: user.answers[id], allVotes, PercentOne, PercentTwo},
    user: users.data[question.author]
  }
}

export default connect(mapStateToProps)(PollPage);
