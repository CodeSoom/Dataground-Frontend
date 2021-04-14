import React from 'react';

import { useDispatch } from 'react-redux';

import { setProblemDifficulty } from '../redux/actions';

export default function DifficultyContainer() {
  const dispatch = useDispatch();

  function handleClick(event) {
    dispatch(setProblemDifficulty(event.target.name));
  }
  return (
    <div>
      <button type="button" name="연습중!" onClick={handleClick}>연습중!</button>
      <button type="button" name="도전!!" onClick={handleClick}>도전!!</button>
    </div>
  );
}
