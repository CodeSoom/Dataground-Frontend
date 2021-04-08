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
