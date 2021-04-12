import React from 'react';

import styled from '@emotion/styled';

const SubmitContainer = styled.div({
  margin: '1vh 0',
});

const SubmintInfo = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: '4vh 0',
});

const Title = styled.div({
  fontSize: '2.7vh',
  width: '20%',
});

const Description = styled.div({
  fontSize: '1vh',
  width: '60%',
});

const SubmitButton = styled.button({
  padding: '.6em 1em',
  border: '1px solid #CCC',
  borderRadius: '10em',
  fontSize: '.4em',
  color: '#595959',
  backgroundColor: 'transparent',
  margin: 'auto',
});

const SubmitInput = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '3vh 0',
});

export default function Submit({ onChange, onClick }) {
  return (
    <SubmitContainer>
      <SubmintInfo>
        <Title>업로드</Title>
        <Description>
          예측값이 담긴 테스트 데이터셋을 업로드 후, 제출하기 버튼을 눌러 제출해 주세요.
        </Description>
        <SubmitButton type="button" onClick={onClick}>
          제출하기
        </SubmitButton>
      </SubmintInfo>

      <SubmitInput>
        <label htmlFor="fileInput" style={{ display: 'none' }}>
          파일 선택:
        </label>

        <input
          id="fileInput"
          type="file"
          accept="text/csv"
          onChange={onChange}
          name="uploadFile"
        />
      </SubmitInput>

    </SubmitContainer>
  );
}
