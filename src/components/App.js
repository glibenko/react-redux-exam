import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { getUsers } from '../actions/users';

import './App.css';

const App = ({ history, users, authedUser, dispatch }) => {

  useEffect(() => {
    console.count('useEffect');
    if (!users.data) {
      dispatch(getUsers());
    }
  }, [users.data, dispatch]);

  if (users.loading || !users.data) {
    return <div> loading... </div>
  }

  return (
    <div>
       <Route exact path='/' component={LoginPage} />

    </div>
  );
}

const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser
});

export default connect(mapStateToProps)(App);
