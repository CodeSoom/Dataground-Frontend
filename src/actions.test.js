import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadProblemInfo,
  loadSubmitRating,
  setProblemTitle,
  setProblemDescription,
  setRating,
} from './actions';

import {
  fetchProblemInfo,
  fetchSubmitRating,
} from './services/api';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  let store;

  describe('loadProblemInfo', () => {
    beforeEach(() => {
      store = mockStore({});
    });
    it('setProblemTitle, setProblemDescription, setRating을 실행합니다.', async () => {
      fetchProblemInfo.mockImplementation(() => ({
        problemTitle: '', problemDescription: '', rating: null,
      }));

      await store.dispatch(loadProblemInfo({ problemId: 1 }));
      const actions = store.getActions();

      expect(actions[0]).toEqual(setProblemTitle(''));
      expect(actions[1]).toEqual(setProblemDescription(''));
      expect(actions[2]).toEqual(setRating(null));
    });
  });

  describe('loadSubmitRating', () => {
    beforeEach(() => {
      store = mockStore({});
    });
    it('setRating을 실행합니다.', async () => {
      fetchSubmitRating.mockImplementation(() => ({
        score: 100, incorrectPredictions: [],
      }));
      const submitFile = new FormData();

      await store.dispatch(loadSubmitRating(submitFile));
      const actions = store.getActions();

      expect(actions[0]).toEqual(setRating({
        score: 100, incorrectPredictions: [],
      }));
    });
  });
});
