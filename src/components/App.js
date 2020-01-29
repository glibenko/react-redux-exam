import React, { useEffect } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { getUsers } from '../actions/users';
import { logOut } from '../actions/authedUser';
import HomePage from './HomePage';
import Nav from './Nav';
import PollPage from './PollPage';
import { getQuestions } from '../actions/questions';
import AddPoll from './AddPoll';
import Board from './Board';

const App = ({ history, users, authedUser, dispatch, questions }) => {

  useEffect(() => {
    if (!users.data) {
      dispatch(getUsers());
    }
  }, [users.data, dispatch]);

  useEffect(() => {
    if (!questions.data) {
      dispatch(getQuestions());
    }
   
  }, [questions.data, dispatch]);

  if (users.loading || !users.data || !questions.data || questions.loading) {
    return <div className="loader"> loading... </div>
  }

  return (
    <div className="container">
      <Nav logOut={logOut} dispatch={dispatch} authedUser={users.data?.[authedUser]} />
      {!authedUser 
        ? <LoginPage />
        : (
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/add" component={AddPoll} />
            <Route exact path="/leaderboard" component={Board} />
            <Route exact path="/questions/:id" component={PollPage} />
            <Redirect from='/*' to="/" />
          </Switch>
      )}
    </div>
  );
}

const mapStateToProps = ({ users, authedUser, questions }) => ({
  users,
  authedUser,
  questions
});

export default withRouter(connect(mapStateToProps)(App));
