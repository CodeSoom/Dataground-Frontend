import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Submit from './Submit';

describe('Submit', () => {
  const newFile = new File(['new file'], 'dataset.csv', { type: 'text/csv' });
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  it('사용자가 파일을 업로드합니다.', () => {
    const { queryByLabelText } = render((
      <Submit
        file={{}}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    expect(queryByLabelText('파일 선택:').value).toEqual('');

    fireEvent.change(queryByLabelText('파일 선택:'), {
      target: {
        files: [newFile],
      },
    });
    expect(queryByLabelText('파일 선택:').value).not.toBeNull();

    expect(handleChange).toBeCalledTimes(1);
  });

  it('"업로드" 버튼을 클릭하여 파일을 서버에 보냅니다.', () => {
    const { queryByText } = render((<Submit
      file={newFile}
      onChange={handleChange}
      onClick={handleClick}
    />));

    expect(queryByText('제출')).not.toBeNull();

    fireEvent.click(queryByText('제출'));

    expect(handleClick).toBeCalledTimes(1);
  });
});
