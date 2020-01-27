import {
  GET_QUESTIONS,
  LOADING_QUESTIONS,
  LOADED_QUESTIONS
} from '../actions/questions';

const initialState = {
  data: null,
  loading: false,
  loaded: false
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case LOADING_QUESTIONS:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case GET_QUESTIONS:
      return {
        ...state,
        data: {...state.data, ...action.data}
      }
    case LOADED_QUESTIONS:
      return {
        ...state,
        loading: false,
        loaded: true
      }
    default:
      return state
  }
}