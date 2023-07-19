import React from 'react';

const Button = ({ onDownload, text }) => {
  const handleDownload = () => {
    onDownload();
  };

  return (
    <div>
      <button onClick={handleDownload}>{text}</button>
    </div>
  );
};

export default Button;