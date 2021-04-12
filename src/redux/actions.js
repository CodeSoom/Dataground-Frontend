import {
  fetchProblemInfo,
  fetchSubmitRating,
} from '../services/api';

export function setProblemTitle(problemTitle) {
  return {
    type: 'setProblemTitle',
    payload: { problemTitle },
  };
}

export function setProblemDescription(problemDescription) {
  return {
    type: 'setProblemDescription',
    payload: { problemDescription },
  };
}
export function setUploadFile(uploadFile) {
  return {
    type: 'setUploadFile',
    payload: { uploadFile },
  };
}
export function setRating(rating) {
  return {
    type: 'setRating',
    payload: { rating },
  };
}

export function loadProblemInfo({ problemId }) {
  return async (dispatch) => {
    const {
      problemTitle, problemDescription, rating,
    } = await fetchProblemInfo({ problemId });

    dispatch(setProblemTitle(problemTitle));
    dispatch(setProblemDescription(problemDescription));
    dispatch(setRating(rating));
  };
}

export function loadSubmitRating(submitFile) {
  return async (dispatch) => {
    const rating = await fetchSubmitRating(submitFile);
    dispatch(setRating(rating));
  };
}
