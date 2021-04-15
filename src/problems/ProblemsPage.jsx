import React from 'react';

import { useHistory } from 'react-router-dom';

import DifficultyContainer from './DifficultyContainer';
import ProblemCategoryContainer from './ProblemCategoryContainer';
import ProblemListContainer from './ProblemListContainer';

export default function ProblemsPage() {
  const history = useHistory();

  function handleProblemClick(problemId) {
    const url = `/problems/${problemId}`;
    history.push(url);
  }

  return (
    <div>
      <DifficultyContainer />
      <ProblemCategoryContainer />
      <ProblemListContainer onClick={handleProblemClick} />
    </div>
  );
}
