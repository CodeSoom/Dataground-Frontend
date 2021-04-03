import React, { useState } from 'react';

import axios from 'axios';

import Download from './Download';
import Submit from './Submit';

// 서버 주소에 따라 변경 예정
const uploadFileUrl = 'http://localhost:8000/api/uploadFile';

export default function App() {
  const [state, setState] = useState({
    uploadFile: {},
  });

  const { uploadFile } = state;

  function handleSubmitChange(event) {
    setState({
      uploadFile: event.target.files[0],
    });
  }

  async function handleSubmitClick() {
    const formData = new FormData();
    formData.append('uploadFile', uploadFile);
    await axios({
      url: uploadFileUrl,
      method: 'post',
      data: formData,
    });
  }

  return (
    <div>
      <Download />
      <Submit
        onChange={handleSubmitChange}
        onClick={handleSubmitClick}
      />
    </div>
  );
}
