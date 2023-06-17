import React, { useState } from 'react';
import ImageDisplay from './components/ImageDisplay';
import TextInput from './components/TextInput';
//import TextOutput from './components/TextOutput';
//import ImageEditor from './components/ImageEditor';
import DownloadButton from './components/DownloadButton';
import './App.css';

const App = () => {
  const [firstText, changeFirstText] = useState('');
  const [secondText, changeSecondText] = useState('');
  //const [editedImage, setEditedImage] = useState('');
  const displayText = firstText + '다, ' + secondText + '아!';


  return (
    <div className='App'>
      <h1>멋지다,연진아!
         짤 생성기</h1>
      <ImageDisplay text={displayText} />
      <div className='inputTextBox'>
        <TextInput  onChange={changeFirstText} text={firstText}/>
        <TextInput  onChange={changeSecondText} text={secondText}/>
        </div>
      <DownloadButton />
    </div>
  );
};

export default App;