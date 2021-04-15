import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import context from 'jest-plugin-context';

import {
  loadProblemInfo,
  loadSubmitRating,
  loadProblems,
  setProblemTitle,
  setProblemDescription,
  setRating,
  setProblems,
} from './actions';

import {
  fetchProblemInfo,
  fetchSubmitRating,
  fetchProblems,
} from '../services/api';

jest.mock('../services/api');

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

  describe('loadProblems', () => {
    context('problemDifficulty와 selectedCategory가 있을 때', () => {
      beforeEach(() => {
        fetchProblems.mockImplementation(() => ({
          problems: [{
            id: 1,
            title: '수능 성적 예측하기',
          }],
        }));

        store = mockStore({
          problemDifficulty: '연습중!',
          selectedSubCategory: '회귀',
        });
      });

      it('setProblems가 실행됩니다.', async () => {
        await store.dispatch(loadProblems());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setProblems([{
          id: 1,
          title: '수능 성적 예측하기',
        }]));
      });
    });

    context('problemDifficulty가 없을 때', () => {
      beforeEach(() => {
        fetchProblems.mockImplementation(() => ({
          problems: [{
            id: 1,
            title: '수능 성적 예측하기',
          }],
        }));
        store = mockStore({
          selectedSubCategory: '회귀',
        });
      });

      it('setProblems가 실행되지 않습니다.', async () => {
        await store.dispatch(loadProblems());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('selectedCategory가 없을 때', () => {
      beforeEach(() => {
        fetchProblems.mockImplementation(() => ({
          problems: [{
            id: 1,
            title: '수능 성적 예측하기',
          }],
        }));
        store = mockStore({
          problemDifficulty: '연습중!',
        });
      });

      it('setProblems가 실행되지 않습니다.', async () => {
        await store.dispatch(loadProblems());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
});
