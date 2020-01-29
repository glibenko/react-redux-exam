import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({ logOut, authedUser, dispatch }) {
  return (
    <div className="menu">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/home">New Questions</NavLink>
        <NavLink to="/home">Leader Board</NavLink>
      </div>
      {!!authedUser && (
        <div className="login">
          <div>Hello, {authedUser.name}</div>
          <div><img src={authedUser.avatarURL} alt={authedUser.name} /></div>
          <NavLink to="/login" onClick={() => dispatch(logOut())}>
            log out
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Nav
