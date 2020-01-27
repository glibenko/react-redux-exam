import { GET_USERS, LOADING_USERS, LOADED_USERS } from "../actions/users";

const initialState = {
  loading: false,
  loaded: false,
  data: null
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        data: {...state.data, ...action.users}
      }
    case LOADING_USERS:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case LOADED_USERS:
      return {
        ...state,
        loading: false,
        loaded: true
      }
    default:
      return state;
  }
}