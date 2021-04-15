import {
  fetchProblemInfo,
  fetchSubmitRating,
  fetchProblems,
} from './api';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchProblemInfo', () => {
    const problemInfo = {
      problemTitle: '수능 성적 예측하기',
      problemDescription: '다양한 학생들의 수능 성적을 예측하여 봅니다.',
      rating: {
        score: 98,
        incorrectPredictions: [{ id: 32 }, { id: 75 }],
      },
    };

    beforeEach(() => {
      mockFetch(problemInfo);
    });

    it('problemInfo를 fetch 합니다.', async () => {
      const fetchedProblemInfo = await fetchProblemInfo({ problemId: 1 });

      expect(fetchedProblemInfo).toEqual(problemInfo);
    });
  });

  describe('fetchSubmitRating', () => {
    const submitRating = {
      score: 98,
      incorrectPredictions: [{ id: 32 }, { id: 75 }],
    };

    beforeEach(() => {
      mockFetch(submitRating);
    });
    it('채점된 결과를 fetch 합니다.', async () => {
      const submitFile = new FormData();
      const fetchedSubmitRating = await fetchSubmitRating(submitFile);

      expect(fetchedSubmitRating).toEqual(submitRating);
    });
  });

  describe('fetchProblems', () => {
    const problems = {
      problems: [{
        id: 1,
        title: '수능 성적 예측하기',
      },
      {
        id: 2,
        title: '모현 아파트값 예측하기',
      }],
    };
    beforeEach(() => {
      mockFetch(problems);
    });

    it('문제의 난이도와 유형에 맞는 문제들을 fetch합니다.', async () => {
      const fetchedProblems = await fetchProblems('easy', 'regression');

      expect(fetchedProblems).toEqual(problems);
    });
  });
});
