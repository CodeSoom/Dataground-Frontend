import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ProblemPage from './problem/ProblemPage';
import ProblemsPage from './problems/ProblemsPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/problems" component={ProblemsPage} />
      <Route exact path="/problems/:id" component={ProblemPage} />
    </Switch>

  );
}
