import React from 'react';

const DownloadButton = ({ onDownload }) => {
  const handleDownload = () => {
    onDownload();
  };

  return (
    <div>
      <button onClick={handleDownload}>다운로드</button>
    </div>
  );
};

export default DownloadButton;