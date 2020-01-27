import { _getQuestions } from '../api/_DATA';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const LOADING_QUESTIONS = 'LOADING_QUESTIONS';
export const LOADED_QUESTIONS = 'LOADED_QUESTIONS';

const handleGetQuestions = (data) => ({
  type: GET_QUESTIONS,
  data
});

const loadingGetQuestions = () => ({
  type: LOADING_QUESTIONS
});

const loadedGetQuestions = () => ({
  type: LOADED_QUESTIONS
});

export const getQuestions = () => (
  (dispatch) => {
    dispatch(loadingGetQuestions());
    _getQuestions()
      .then(res => dispatch(handleGetQuestions(res)))
      .then(() => dispatch(loadedGetQuestions()))
  }
);