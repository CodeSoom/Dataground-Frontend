import {
  fetchProblemInfo,
  fetchSubmitRating,
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
});
