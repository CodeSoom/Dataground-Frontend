import React from 'react';

import styled from '@emotion/styled';

const DownloadContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const DownloadTitle = styled.div({
  fontSize: '2.7vh',
  width: '20%',
});

const DownloadDescription = styled.div({
  fontSize: '1vh',
  width: '60%',
});

const DownloadButton = styled.button({
  padding: '.6em 1em',
  border: '1px solid #CCC',
  borderRadius: '10em',
  fontSize: '.4em',
  color: '#595959',
  backgroundColor: 'transparent',
  margin: 'auto',
});

export default function Download({ onClick }) {
  return (
    <DownloadContainer>
      <DownloadTitle>
        다운로드
      </DownloadTitle>

      <DownloadDescription>
        주어진 데이터셋을 다운로드하세요.
      </DownloadDescription>

      <DownloadButton type="button" onClick={onClick}>
        DOWNLOAD
      </DownloadButton>

    </DownloadContainer>
  );
}
