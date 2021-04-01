import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Download from './Download';

describe('Download', () => {
  it('"훈련 데이터셋"을 볼 수 있다.', () => {
    const { container } = render((
      <Download />
    ));
    expect(container).toHaveTextContent('훈련 데이터셋');
  });

  it('"테스트 데이터셋"을 볼 수 있다.', () => {
    const { container } = render((
      <Download />
    ));

    expect(container).toHaveTextContent('테스트 데이터셋');
  });

  it('"training set"을 클릭하면 훈련 데이터셋을 내려받을 수 있다', () => {
    const downloadTrainingSet = jest.fn();

    const { container } = render((
      <Download />
    ));

    expect(container.querySelector('a')).not.toBeNull();

    fireEvent(container.querySelector('a'));

    expect(downloadTrainingSet()).toBeCalled();
  });
});
