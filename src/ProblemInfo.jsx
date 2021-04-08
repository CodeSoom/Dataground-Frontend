import React from 'react';

export default function ProblemInfo({ title, description }) {
  return (
    <div>
      <div>{title}</div>
      <p>{description}</p>
    </div>
  );
}
