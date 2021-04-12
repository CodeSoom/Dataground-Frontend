import context from 'jest-plugin-context';

import reducer from './reducer';

import {
  setProblemTitle,
  setProblemDescription,
  setRating,
  setUploadFile,
} from './actions';

describe('reducer', () => {
  context('state가 없을 때', () => {
    const initialState = {
      problemTitle: '',
      problemDescription: '',
      uploadFile: {},
      rating: null,
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
    it('PrblemDescription을 바꿉니다.', () => {
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
});
