import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { getUsers } from '../actions/users';
import { logOut } from '../actions/authedUser';
import HomePage from './HomePage';
import Nav from './Nav';
import PollPage from './PollPage';

const App = ({ history, users, authedUser, dispatch }) => {

  useEffect(() => {
    console.count('useEffect');
    if (!users.data) {
      dispatch(getUsers());
    }
  }, [users.data, dispatch]);

  useEffect(() => {
    console.count('authedUser', history);
    if (authedUser) {
      history.push('/');
    } else {
      history.push('/login');
    }
  }, [authedUser, history])

  if (users.loading || !users.data) {
    return <div className="loader"> loading... </div>
  }

  return (
    <div className="container">
      <Nav logOut={logOut} dispatch={dispatch} authedUser={authedUser} />
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/questions/:id" component={PollPage} />
    </div>
  );
}

const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser
});

export default withRouter(connect(mapStateToProps)(App));
