import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Question = ({ author, id, poll, user, optionOne }) => {

  console.log('user', user);
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
              <div>
                <div>
                  <input type="radio" name="vote" />
                  <input type="radio" name="vote" />
                </div>
                <button> olala </button>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users }, { author }) => {
  const user = users.data[author];
  return {
    user
  }
}

export default connect(mapStateToProps)(Question);
