import React from 'react';

export default function Download({ onClick }) {
  return (
    <div>
      <span>다운로드</span>
      <button type="button" onClick={onClick}>
        DOWNLOAD
      </button>
    </div>
  );
}
