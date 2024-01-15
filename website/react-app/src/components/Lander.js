import React, { useState, useEffect, useRef } from 'react';
import SideSec from './sub-components/SideSec';

export default function Lander(props) {

  const textareaRef = useRef(null);
  const [fontSize, setFontSize] = useState(16);
  const [fontWeight, setFontWeight] = useState('normal');
  const [fontStyle, setFontStyle] = useState('normal');
  const [textDecoration, setTextDecoration] = useState('none');
  const [textAlign, setTextAlign] = useState('left');
  const [textTransform, setTextTransform] = useState('capitalize');
  const [textColor, setTextColor] = useState('#000000');
  const [font, setFont] = useState("'Poppins', sans-serif");

  const handleFontSizeChange = (e) => {
    let value = e.target.value;
    setFontSize(value);
  }

  const handleChangeFont = (e) => {
    let value = e.target.value;
    console.log(value);
    setFont(value);
  }

  const handleBoldClick = () => {
    setFontWeight(prevWeight => (prevWeight === 'bold' ? 'normal' : 'bold'));
  }

  const handleItalicClick = () => {
    setFontStyle(prevStyle => (prevStyle === 'italic' ? 'normal' : 'italic'));
  }

  const handleUnderlineClick = () => {
    setTextDecoration(prevDecoration => (prevDecoration === 'underline' ? 'none' : 'underline'));
  }

  const handleAlignLeftClick = () => {
    setTextAlign('left');
  }

  const handleAlignCenterClick = () => {
    setTextAlign('center');
  }

  const handleAlignRightClick = () => {
    setTextAlign('right');
  }

  const handleTextTransformClick = () => {
    setTextTransform(prevTransform => (prevTransform === 'uppercase' ? 'none' : 'uppercase'));
  }

  const handleResetClick = () => {
    setFontSize(16);
    setFontWeight('normal');
    setFontStyle('normal');
    setTextDecoration('none');
    setTextAlign('left');
    setTextTransform('capitalize');
    setTextColor('#000000');
    if (textareaRef.current) {
      textareaRef.current.value = '';
    }
  }

  const handleColorChange = (e) => {
    setTextColor(e.target.value);
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.value = '';
    }
  }, []);

  return (
    <>
      <div className='mainLander'>
        <div className="row">
          <div className="sideSec col-lg-3">
            <SideSec />
          </div>
          <div className="col-lg-9 text-col">
            <div className="col-lg-12 text-options">
              <div className="option-sec font-change">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onChange={handleChangeFont}>{props.font}</button>
                <ul class="dropdown-menu">
                  <li className='dropdown-item'>Courier Prime</li>
                  <li className='dropdown-item'>Josefine Sans</li>
                  <li className='dropdown-item'>Poppins</li>
                  <li className='dropdown-item'>Roboto</li>
                  <li className='dropdown-item'>Space Grotesk</li>
                  <li className='dropdown-item'>Space Mono</li>
                </ul>
              </div>
              <div className="option-sec first">
                <input type="number" value={fontSize} min='1' max='100' onChange={handleFontSizeChange} />
              </div>
              <div className="second option-sec">
                <button type="button" onClick={handleBoldClick}>
                  <i className="fa-solid fa-bold"></i>
                </button>
                <button type="button" onClick={handleItalicClick}>
                  <i className="fa-solid fa-italic"></i>
                </button>
                <button type="button" onClick={handleUnderlineClick}>
                  <i className="fa-solid fa-underline"></i>
                </button>
              </div>
              <div className="third option-sec">
                <button type="button" onClick={handleAlignLeftClick}>
                  <i className="fa-solid fa-align-left"></i>
                </button>
                <button type="button" onClick={handleAlignCenterClick}>
                  <i className="fa-solid fa-align-center"></i>
                </button>
                <button type="button" onClick={handleAlignRightClick}>
                  <i className="fa-solid fa-align-right"></i>
                </button>
              </div>
              <div className="fourth option-sec">
                <button type="button" onClick={handleTextTransformClick}>aA</button>
                <button type="button" onClick={handleResetClick}>
                  <i className="fa-solid fa-text-slash"></i>
                </button>
                <input type="color" value={textColor} onChange={handleColorChange} />
              </div>
            </div>
            <div className="col-lg-12 main-text-area">
              <textarea
                ref={textareaRef}
                className="form-control"
                style={{
                  fontSize: `${fontSize}px`,
                  fontWeight,
                  fontStyle,
                  textDecoration,
                  textAlign,
                  textTransform,
                  color: textColor,
                  fontFamily: `${font}`
                }}
                aria-label="With textarea"
                placeholder='Write your Script here'
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}