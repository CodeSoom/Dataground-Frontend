import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import Download from './Download';
import Submit from './Submit';
import Rating from './Rating';
import ProblemInfo from './ProblemInfo';

import { setUploadFile, loadProblemInfo } from './actions';

// 문제 번호 추후 구현 예정
const problemId = 1;

// 서버 주소에 따라 변경 예정
const downloadFileUrl = 'http://localhost:8000/download/dataset';
const uploadFileUrl = 'http://localhost:8000/api/uploadFile';

export default function ProblemContainer() {
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

  function handleSubmitClick() {
    const formData = new FormData();
    formData.append('uploadFile', uploadFile);
    axios.post(uploadFileUrl, formData);
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
