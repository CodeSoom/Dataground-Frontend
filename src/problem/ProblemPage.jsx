import React from 'react';

import { useParams } from 'react-router-dom';

import ProblemContainer from './ProblemContainer';

export default function ProblemPage({ params }) {
  const { id } = params || useParams();

  return (<ProblemContainer problemId={id} />);
}
