import { _saveQuestionAnswer, _saveQuestion } from '../api/_DATA';

export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

const handleSaveAnswer = (authedUser, qid, answer) => ({
  type: SAVE_ANSWER,
  authedUser,
  qid,
  answer
})

export const saveAnswer = (authedUser, qid, answer) => (
  (dispatch) => {
    dispatch(handleSaveAnswer(authedUser, qid, answer));
    _saveQuestionAnswer(authedUser, qid, answer);
  }
)

const handleSaveQuestion = (question) => ({
  type: SAVE_QUESTION,
  question
})

export const saveQuestion = (question) => (
  (dispatch) => {
    _saveQuestion(question)
      .then(res => dispatch(handleSaveQuestion(res)))
  }
)