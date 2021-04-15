import context from 'jest-plugin-context';

import reducer from './reducer';

import {
  setProblemTitle,
  setProblemDescription,
  setRating,
  setUploadFile,
  setProblemDifficulty,
  setSelectedSubCategories,
  setSelectedSubCategory,
  setProblems,
} from './actions';

describe('reducer', () => {
  context('state가 없을 때', () => {
    const initialState = {
      problemTitle: '',
      problemDescription: '',
      uploadFile: {},
      rating: null,
      problemDifficulty: '',
      selectedSubCategories: [],
      selectedSubCategory: '',
      problems: [],
    };
    it('initialState를 반환합니다.', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setProblemTitle', () => {
    it('ProblemTitle을 바꿉니다.', () => {
      const initialState = {
        problemTitle: '',
      };

      const state = reducer(initialState, setProblemTitle('수능 성적 예측하기'));

      expect(state.problemTitle).toEqual('수능 성적 예측하기');
    });
  });

  describe('setPrblemDescription', () => {
    it('prblemDescription를 바꿉니다.', () => {
      const initialState = {
        problemDescription: '',
      };

      const state = reducer(initialState, setProblemDescription('수능 성적을 예측합니다.'));

      expect(state.problemDescription).toEqual('수능 성적을 예측합니다.');
    });
  });

  describe('setRating', () => {
    it('Rating을 바꿉니다.', () => {
      const initialState = {
        rating: {},
      };

      const state = reducer(initialState, setRating({
        score: 98,
        incorrectPredictions: [
          { id: 32 }, { id: 75 },
        ],
      }));

      expect(state.rating.score).toEqual(98);
    });
  });

  describe('setUploadFile', () => {
    it('업로드한 파일을 바꿉니다.', () => {
      const file = new File(['new file'], 'dataset.csv', { type: 'text/csv' });
      const initialState = {
        uploadFile: null,
      };

      const state = reducer(initialState, setUploadFile(file));

      expect(state.uploadFile).not.toBeNull();
    });
  });

  describe('setProblemDifficulty', () => {
    it('문제 난이도를 바꿉니다.', () => {
      const initialState = {
        problemDifficulty: '',
      };

      const state = reducer(initialState, setProblemDifficulty('연습중!'));

      expect(state.problemDifficulty).toEqual('연습중!');
    });
  });

  describe('setSelectedSubCategories', () => {
    it('selectedSubCategories를 바꿉니다.', () => {
      const initialState = {
        selectedSubCategories: [],
      };

      const state = reducer(initialState, setSelectedSubCategories(['회귀']));

      expect(state.selectedSubCategories).toEqual(['회귀']);
    });
  });

  describe('setSelectedSubCategory', () => {
    it('selectedSubCategory를 바꿉니다.', () => {
      const initialState = {
        selectedSubCategories: '',
      };

      const state = reducer(initialState, setSelectedSubCategory('회귀'));

      expect(state.selectedSubCategory).toEqual('회귀');
    });
  });

  describe('setProblems', () => {
    it('problems를 바꿉니다.', () => {
      const newProblems = [{
        id: 1,
        title: '수능 성적 예측하기',
      },
      {
        id: 2,
        title: '모현 아파트값 예측하기',
      }];

      const initialState = {
        problems: [],
      };

      const state = reducer(initialState, setProblems(newProblems));

      expect(state.problems).toEqual(newProblems);
    });
  });
});
