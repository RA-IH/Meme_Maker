import React from 'react';

const TextInput = ({ onChange, text }) => {
    const handleTextChange = (e) => {
        onChange(e.target.value);
    };

  return (
    <div>
      <input type="text" onChange={handleTextChange} value={text} />
    </div>
  );
};

export default TextInput;