import React from 'react';

import { saveAs } from 'file-saver';

export default function Download() {
  // 임시적인 데이터
  const blob = new Blob(['dataset'], { type: 'text/csv' });

  function handleClick() {
    saveAs(blob);
  }

  return (
    <div>
      <span>다운로드</span>
      <button type="button" onClick={handleClick}>
        DOWNLOAD
      </button>
    </div>
  );
}
