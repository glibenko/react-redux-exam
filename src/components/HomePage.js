import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/questions';

function HomePage({ questions, dispatch }) {

  useEffect(() => {
    if (!questions.data) {
    dispatch(getQuestions());
    }
   
  }, [questions.data, dispatch])

  return (
    <div>
      <div>Would You Rather?</div>

    </div>
  )
}

const mapStateToProps = ({ users, authedUser, questions }) => ({
  users,
  authedUser,
  questions
});

export default connect(mapStateToProps)(HomePage)
