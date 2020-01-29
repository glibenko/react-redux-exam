import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({ logOut, authedUser, dispatch }) {
  return (
    <div className="menu">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add">New Questions</NavLink>
        <NavLink to="/leaderboard">Leader Board</NavLink>
      </div>
      {!!authedUser && (
        <div className="login">
          <div>Hello, {authedUser.name}</div>
          <div><img src={authedUser.avatarURL} alt={authedUser.name} /></div>
          <button className="btn-out" onClick={() => dispatch(logOut())}>
            log out
          </button>
        </div>
      )}
    </div>
  )
}

export default Nav
