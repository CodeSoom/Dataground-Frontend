import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Download from './Download';
import Submit from './Submit';
import Rating from './Rating';
import ProblemInfo from './ProblemInfo';

import {
  setUploadFile,
  loadProblemInfo,
  loadSubmitRating,
} from './actions';

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
    <div>
      <ProblemInfo
        title={problemTitle}
        description={problemDescription}
      />

      <Download
        onClick={handleDownloadClick}
      />

      <Submit
        onChange={handleSubmitChange}
        onClick={handleSubmitClick}
      />

      <Rating rating={rating} />
    </div>
  );
}
