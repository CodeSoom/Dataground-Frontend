import React from 'react';

export default function Rating({ rating }) {
  return (
    <div>
      {rating
        ? (
          <div>
            {`점수: ${rating.score}`}
            <ul>
              {rating.incorrectPredictions
                .map((incorrectPrediction) => (
                  <li key={incorrectPrediction.id}>
                    {`오답 데이터: ${incorrectPrediction.id}번`}
                  </li>
                ))}
            </ul>
          </div>

        )
        : (
          <p>
            파일을 제출해 주세요.
          </p>
        )}
    </div>
  );
}
