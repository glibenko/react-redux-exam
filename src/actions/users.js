import { _getUsers } from '../api/_DATA';

export const GET_USERS = 'GET_USERS';
export const LOADING_USERS = 'LOADING_USERS';
export const LOADED_USERS = 'LOADED_USERS';

const handleGetUsers = (users) => ({
  type: GET_USERS,
  users
});

const handleUsersLoading = () => ({
  type: LOADING_USERS
});

const handleUsersLoaded = () => ({
  type: LOADED_USERS
});


export const getUsers = () => (
  (dispatch) => {
    dispatch(handleUsersLoading())
    _getUsers()
      .then((res) => {
        dispatch(handleGetUsers(res))
      })
      .then(() => dispatch(handleUsersLoaded()))
  } 
)

