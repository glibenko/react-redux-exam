import React, { useEffect } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { getUsers } from '../actions/users';
import { logOut } from '../actions/authedUser';
import HomePage from './HomePage';


import './App.css';

const App = ({ history, users, authedUser, dispatch }) => {

  useEffect(() => {
    console.count('useEffect');
    if (!users.data) {
      dispatch(getUsers());
    }
  }, [users.data, dispatch]);

  // useEffect(() => {
  //   console.count('authedUser', history);
  //   if (authedUser) {
  //     history.push('/home');
  //   } else {
  //     history.push('/');
  //   }
  // }, [authedUser, history])

  if (users.loading || !users.data) {
    return <div> loading... </div>
  }

  return (
    <div>
      <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/home">New Questions</NavLink>
        <NavLink to="/home">Leader Board</NavLink>
        {authedUser && (
          <>
            <div>{authedUser}</div>
            <button onClick={() => dispatch(logOut())}>
              log out
            </button>
          </>
        )}
      </div>
      {/* <Route exact path="/" component={LoginPage} /> */}
      <Route exact path="/" component={HomePage} />

    </div>
  );
}

const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser
});

export default withRouter(connect(mapStateToProps)(App));
