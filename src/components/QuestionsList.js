import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';

const QuestionsList = ({ list }) => {

  if (!list.length) {
    return <div>Empty</div>
  }

  return (
    <div>
      {list.map(el => (
        <Question
          key={el.id}
          {...el}
        />
      ))}
    </div>
  )
}

const mapStateToProps = ({ users, questions, authedUser }, { type }) => {
  if (!authedUser) {
    return {}
  }
  const user = users.data[authedUser];
  const answered = Object.keys(user.answers);
  let list = [];
  if (type === 'answered') {
    list = answered.map(el => questions.data[el])
  } else {
    const unanswered =  Object.keys(questions.data).filter(el => !el.includes(answered));
    list = unanswered.map(el => questions.data[el])
  }

  return {
    list
  }
}

export default connect(mapStateToProps)(QuestionsList)
