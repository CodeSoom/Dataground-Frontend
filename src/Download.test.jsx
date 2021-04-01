import React from 'react';

import { render } from '@testing-library/react';
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
});
