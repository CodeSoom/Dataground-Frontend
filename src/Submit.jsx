import React from 'react';

export default function Submit({ onChange, onClick }) {
  return (
    <div>
      <label>
        파일 선택:
        <input
          id="fileInput"
          type="file"
          accept="text/csv"
          onChange={onChange}
          name="uploadFile"
        />
      </label>

      <button type="button" onClick={onClick}>제출</button>
    </div>
  );
}
