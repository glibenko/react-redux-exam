import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveAnswer } from '../actions/shared';

const Question = ({ author, id, poll, user, optionOne, optionTwo, dispatch, authedUser }) => {
  const [vote, setVote] = useState('optionOne');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveAnswer(authedUser, id, vote))
  }

  return (
    <div className="question">
      <div className="name">{user.name} asks?</div>
      <div style={{ display: 'flex'}}>
        <div className="img">
          <img src={user.avatarURL} alt={user.name} />
        </div>
        <div style={{ width: '100%'}}>
          <h3>Would You Rather?</h3>
          {!poll 
            ? (
              <div>
                <div style={{color: '#ccc'}}>...{optionOne.text}..</div>
                <Link className="link" to={`/questions/${id}`}>
                  View Poll
                </Link>
              </div>
            ) : (
              <form className="form-vote" onSubmit={handleSubmit}>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="optionOne"
                      checked={vote === 'optionOne'}
                      onChange={(e) => setVote(e.target.value)}
                    />
                    {optionOne.text}
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="optionTwo"
                      checked={vote === 'optionTwo'}
                      onChange={(e) => setVote(e.target.value)}
                    />
                    {optionTwo.text}
                  </label>
                </div>
                <button
                  style={{ marginTop: 10 }}
                  className="btn"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users, authedUser }, { author }) => {
  const user = users.data[author];
  return {
    user,
    authedUser
  }
}

export default connect(mapStateToProps)(Question);
