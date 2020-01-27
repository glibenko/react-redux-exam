export const SET_USER = 'SET_AUTHED_USER';
export const LOGOUT_USER = 'LOGOUT_USER'; 

export const setUser = (id) => ({
  type: SET_USER,
  id
})

export const logOut = (id) => ({
  type: LOGOUT_USER
})