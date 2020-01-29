import {
  GET_QUESTIONS,
  LOADING_QUESTIONS,
  LOADED_QUESTIONS,
} from '../actions/questions';
import { SAVE_ANSWER, SAVE_QUESTION } from '../actions/shared';

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
    case SAVE_ANSWER:
      return {
        ...state,
        data: {
          ...state.data,
          [action.qid]: {
            ...state.data[action.qid],
            [action.answer]: {
              ...state.data[action.qid][action.answer],
              votes: state.data[action.qid][action.answer].votes.concat([action.authedUser])
            }
          }
        }
      }
    case SAVE_QUESTION:
      return {
        ...state,
        data: {
          ...state.data,
          [action.question.id]: action.question
        }
      }
    default:
      return state
  }
}