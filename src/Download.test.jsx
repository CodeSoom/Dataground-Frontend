import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Download from './Download';

describe('Download', () => {
  global.URL.createObjectURL = jest.fn();

  it('"다운로드" 버튼을 클릭하면 파일을 다운로드 할 수 있다', () => {
    const downloadData = jest.fn();

    const { queryByText } = render((
      <Download />
    ));

    expect(queryByText('download')).not.toBeNull();

    fireEvent.click(queryByText('download'));

    expect(downloadData()).toBeCalled();
  });
});
