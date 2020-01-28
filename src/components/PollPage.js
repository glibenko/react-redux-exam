import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';

function PollPage({ poll, score }) {

  console.log('poll', poll, score)

  if (poll) {
    return <Question {...poll} poll />
  }

  return (
     <div>
      <h3>asked by {score.author}</h3>
      <div>
        <div>avatar</div>
        <div>
          <h3>Results:</h3>
          <div>
            <div>Would You Rather {score.optionOne.text}</div>
            <div>{score.PercentOne}%</div>
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
    score: { ...question, userVote: user.answers[id], allVotes, PercentOne, PercentTwo}
  }
}

export default connect(mapStateToProps)(PollPage);
