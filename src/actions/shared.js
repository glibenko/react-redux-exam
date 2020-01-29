import { _saveQuestionAnswer } from '../api/_DATA';
import { getUsers } from './users';
import { getQuestions } from './questions';

export const saveAnswer = (authedUser, qid, answer) => (
  (dispatch) => {
    _saveQuestionAnswer(authedUser, qid, answer)
      .then(() => {
        dispatch(getUsers());
        dispatch(getQuestions());
      })
  }
)