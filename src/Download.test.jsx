import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { saveAs } from 'file-saver';

import Download from './Download';

jest.mock('file-saver');

describe('Download', () => {
  saveAs.mockImplementation((item) => item);

  it('"DOWNLOAD" 버튼을 클릭하면 파일을 다운로드 할 수 있다', () => {
    const { queryByText } = render((
      <Download />
    ));

    expect(queryByText('DOWNLOAD')).not.toBeNull();

    fireEvent.click(queryByText('DOWNLOAD'));

    expect(saveAs).toBeCalled();
  });
});
