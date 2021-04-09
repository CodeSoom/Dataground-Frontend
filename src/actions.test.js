import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadProblemInfo,
  setProblemTitle,
  setProblemDescription,
  setRating,
} from './actions';

import { fetchProblemInfo } from './services/api';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  let store;

  describe('loadProblemInfo', () => {
    beforeEach(() => {
      store = mockStore({});
    });
    it('해당 문제의 정보를 load 합니다.', async () => {
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
});
