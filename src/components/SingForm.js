import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/authedUser';

function SingForm({ users, dispatch }) {
  const [user, handleUser] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(user))
  }

  return (
    <form className="sing-form" onSubmit={onSubmit}> 
      <select
        className="select"
        value={user}
        onChange={(e) => handleUser(e.target.value)}
      >
        <option key='' value='' disabled>Select user</option>
        {users.map((el) => 
          <option key={el}>{el}</option>
        )}
      </select>
      <button
        style={{ marginTop: 10 }}
        className="btn"
        onSubmit={onSubmit}
        disabled={!user.length}
      >
        Sing in
      </button>
    </form>
  )
}

const mapStateToProps = ({ users }) => ({
  users: Object.keys(users.data)
})

export default connect(mapStateToProps)(SingForm)
