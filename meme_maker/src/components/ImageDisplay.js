import React from 'react';

const ImageDisplay = ({ text }) => {
    const imageSrc = '/images/memeImage.png';
    const textOverlay = {
            position: 'absolute'
            , top: '68%'
            , left: '50%'
            , transform: 'translate(-50%, -50%)'
            , fontSize: '24px'
            , fontWeight: 'bold'
            , color: 'white'
            , backgroundColor: 'rgba(0, 0, 0, 0.7)'
            , padding: '10px'
    };

    return (
    <div>
      <img src={imageSrc} alt='이미지' />
      {text && <div style={textOverlay}>{text}</div>}
    </div>
  );
};

export default ImageDisplay;