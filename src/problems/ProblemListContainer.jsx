import React from 'react';

import { useSelector } from 'react-redux';

export default function ProblemListContainer({ onClick }) {
  const problems = useSelector((state) => state.problems);
  return (
    <div>
      {(problems.length)
        ? (
          problems.map((problem) => (
            <button
              type="button"
              key={problem.id}
              name={problem.title}
              onClick={() => onClick(problem.id)}

            >
              {problem.title}
            </button>
          ))
        )
        : null}
    </div>
  );
}
