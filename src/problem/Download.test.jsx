import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Download from './Download';

describe('Download', () => {
  it('"DOWNLOAD" 버튼을 클릭하면 파일을 다운로드 할 수 있습니다.', () => {
    const handleDownloadClick = jest.fn();

    const { queryByText } = render((
      <Download onClick={handleDownloadClick} />
    ));

    expect(queryByText('DOWNLOAD')).not.toBeNull();

    fireEvent.click(queryByText('DOWNLOAD'));

    expect(handleDownloadClick).toBeCalledTimes(1);
  });
});
