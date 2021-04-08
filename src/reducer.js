const initialState = {
  problemTitle: '',
  problemDescription: '',
  uploadFile: {},
  rating: null,
};

const reducers = {
  setProblemTitle(state, { payload: { problemTitle } }) {
    return {
      ...state,
      problemTitle,
    };
  },

  setProblemDescription(state, { payload: { problemDescription } }) {
    return {
      ...state,
      problemDescription,
    };
  },

  setUploadFile(state, { payload: { uploadFile } }) {
    return {
      ...state,
      uploadFile,
    };
  },

  setRating(state, { payload: { rating } }) {
    return {
      ...state,
      rating,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
