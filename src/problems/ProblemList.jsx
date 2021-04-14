import React from 'react';

export default function ProblemList({ problems, onClick }) {
  return (
    <div>
      {problems.length !== 0
        ? (
          problems.map((problem) => (
            <div
              role="button"
              key={problem.id}
              name={problem.name}
              onClick={onClick}

            >
              {problem.name}
            </div>
          ))
        )
        : (
          <div>
            문제가 없습니다.
          </div>
        )}
      ;
    </div>
  );
}
