import React, { useState } from 'react';
import { saveQuestion } from '../actions/shared';
import { connect } from 'react-redux';

function AddPoll({ authedUser, dispatch, history }) {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveQuestion({
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    }));
    history.push('/');
  }

  return (
    <div className="add">
      <div className="name">Create New Question</div>
      <div className="sub-name">Complete the Question</div>
      <div className="add-question">Would You Rather...</div>
      <form onSubmit={handleSubmit}>
        <input value={optionOne} onChange={(e) => setOptionOne(e.target.value)}/>
        <div className="separate">OR</div>
        <input value={optionTwo} onChange={(e) => setOptionTwo(e.target.value)}/>
        <button className="btn" onClick={handleSubmit} disabled={!optionOne.length || !optionTwo.length}>
          Submit
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(AddPoll)
