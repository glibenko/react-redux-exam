import { GET_USERS, LOADING_USERS, LOADED_USERS } from "../actions/users";
import { SAVE_ANSWER, SAVE_QUESTION } from '../actions/shared';

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
    case SAVE_ANSWER: 
      return {
        ...state,
        data: {
          ...state.data,
          [action.authedUser]: {
            ...state.data[action.authedUser],
            answers: {
              ...state.data[action.authedUser].answers,
              [action.qid]: action.answer
            }
          }
        }
      }
    case SAVE_QUESTION: 
      return {
        ...state,
        data: {
          ...state.data,
          [action.question.author]: {
            ...state.data[action.question.author],
            questions: state.data[action.question.author].questions.concat(action.question.id)
          }
        }
      }
    default:
      return state;
  }
}