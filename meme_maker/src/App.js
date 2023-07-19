import React, { useState } from 'react';
import ImageDisplay from './components/ImageDisplay';
import TextInput from './components/TextInput';
//import TextOutput from './components/TextOutput';
//import ImageEditor from './components/ImageEditor';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [firstText, changeFirstText] = useState('');
  const [secondText, changeSecondText] = useState('');
  //const [editedImage, setEditedImage] = useState('');
  const displayText = firstText + '다, ' + secondText + '아!';
  const downloadBtnText = '짤 다운로드';
    //const puppeteer = require("puppeteer");
    //퍼피티어 실행 코드
    const captureScreenshot = async () => {
        //     const browser = await puppeteer.launch();
        //     const page = await browser.newPage();
        //     await page.goto('http://localhost:3000/'); // 캡처할 웹 페이지 주소 입력
        //     await page.screenshot({
        //         path: 'screenshot.png' ,
        //         // fullPage: true,
        //         clip: {x: 100, y: 100, width: 300, height: 300},
        //     }); // 캡처 파일 경로 및 이름 지정
        //     await browser.close();
    }
  return (
    <div className='App'>
      <h1>멋지다,연진아!
         짤 생성기</h1>
      <ImageDisplay text={displayText} />
      <div className='inputTextBox'>
        <TextInput  onChange={changeFirstText} text={firstText}/>
        <TextInput  onChange={changeSecondText} text={secondText}/>
        </div>
      <Button onDownload={captureScreenshot} text={downloadBtnText} />
    </div>
  );
};

export default App;