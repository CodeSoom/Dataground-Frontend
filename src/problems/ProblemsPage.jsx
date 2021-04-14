import React from 'react';

import DifficultyContainer from './DifficultyContainer';
import ProblemCategoryContainer from './ProblemCategoryContainer';

export default function ProblemsPage() {
  return (
    <div>
      <a href="/problem/1">1번 문제</a>
      <DifficultyContainer />
      <ProblemCategoryContainer />
    </div>
  );
}
