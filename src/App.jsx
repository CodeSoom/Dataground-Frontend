import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ProblemPage from './ProblemPage';
import ProblemsPage from './ProblemsPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ProblemsPage} />
      <Route exact path="/problem/:id" component={ProblemPage} />
    </Switch>

  );
}
