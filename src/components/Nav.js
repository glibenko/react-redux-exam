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
      {authedUser && (
        <div>
          <div>{authedUser}</div>
          <button onClick={() => dispatch(logOut())}>
            log out
          </button>
        </div>
      )}
    </div>
  )
}

export default Nav
