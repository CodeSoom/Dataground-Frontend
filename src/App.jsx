import React, { useState } from 'react';

import axios from 'axios';

import Download from './Download';
import Submit from './Submit';
import Rating from './Rating';

// 서버 주소에 따라 변경 예정
const downloadFileUrl = 'http://localhost:8000/download/dataset';
const uploadFileUrl = 'http://localhost:8000/api/uploadFile';

export default function App() {
  const [state, setState] = useState({
    uploadFile: {},
    rating: null,
  });

  const { uploadFile, rating } = state;

  function handleDownloadClick() {
    window.location.href = downloadFileUrl;
  }

  function handleSubmitChange(event) {
    setState({
      uploadFile: event.target.files[0],
    });
  }

  function handleSubmitClick() {
    const formData = new FormData();
    formData.append('uploadFile', uploadFile);
    axios.post(uploadFileUrl, formData);
  }

  return (
    <div>
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
