import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Download from './Download';
import Submit from './Submit';
import Rating from './Rating';
import ProblemInfo from './ProblemInfo';

import {
  setUploadFile,
  loadProblemInfo,
  loadSubmitRating,
} from './actions';

const Container = styled.div({
  margin: '0 auto',
  width: '90%',
  height: '100vh',
  color: '#494949',
  border: '1px solid',
  borderRadius: '.8rem',
  borderColor: '#e5e5e5',
});

const ProblemDataContainer = styled.div({
  margin: '5vh 10vw',
  display: 'flex',
  flexDirection: 'column',
});

export default function ProblemContainer({ problemId }) {
  const downloadFileUrl = `http://localhost:8000/download/${problemId}`;

  const dispatch = useDispatch();

  const {
    problemTitle, problemDescription, uploadFile, rating,
  } = useSelector((state) => ({
    problemTitle: state.problemTitle,
    problemDescription: state.problemDescription,
    uploadFile: state.uploadFile,
    rating: state.rating,
  }));

  const handleDownloadClick = useCallback(() => {
    window.location.href = downloadFileUrl;
  }, [problemTitle]);

  function handleSubmitChange(event) {
    dispatch(setUploadFile(event.target.files[0]));
  }

  async function handleSubmitClick() {
    const formData = new FormData();
    formData.append('problemId', problemId);
    formData.append('uploadFile', uploadFile);
    dispatch(loadSubmitRating(formData));
  }

  useEffect(() => {
    dispatch(loadProblemInfo({ problemId }));
  }, []);

  return (
    <Container>
      <ProblemInfo
        title={problemTitle}
        description={problemDescription}
      />
      <ProblemDataContainer>
        <Download
          onClick={handleDownloadClick}
        />

        <Submit
          onChange={handleSubmitChange}
          onClick={handleSubmitClick}
        />

        <Rating rating={rating} />
      </ProblemDataContainer>

    </Container>
  );
}
