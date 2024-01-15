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
  const [font, setFont] = useState("Poppins");

  const handleFontSizeChange = (e) => {
    const inputElement = e.currentTarget.parentNode.querySelector('input[type=number]');
    const action = e.currentTarget.dataset.action;

    if (action === 'increase') {
      inputElement.stepUp();
    } else if (action === 'decrease') {
      inputElement.stepDown();
    }

    setFontSize(inputElement.value);

    applyStyleToSelection('fontSize', inputElement.value + 'px');
  }

  const handleChangeFont = (e) => {
    let value = e.target.textContent;
    setFont(value);

    if (textareaRef.current) {
      applyStyleToSelection('fontFamily', value);
    }
  };

  const applyStyleToSelection = (style, value) => {
    const textarea = textareaRef.current;

    if (textarea.selectionStart !== undefined && textarea.selectionEnd !== undefined) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      const selectedText = textarea.value.substring(start, end);
      const prefix = textarea.value.substring(0, start);
      const suffix = textarea.value.substring(end);

      const styledText = `<span style="${style}:${value}">${selectedText}</span>`;

      textarea.value = prefix + styledText + suffix;
    } else {
      textarea.value += `<span style={${style}:'${value}'}></span>`;
    }
  };


  const handleBoldClick = () => {
    setFontWeight(prevWeight => (prevWeight === 'bold' ? 'normal' : 'bold'));
    applyStyleToSelection('fontWeight', fontWeight === 'bold' ? 'normal' : 'bold');
  }

  const handleItalicClick = () => {
    setFontStyle(prevStyle => (prevStyle === 'italic' ? 'normal' : 'italic'));
    applyStyleToSelection('fontStyle', fontStyle === 'italic' ? 'normal' : 'italic');
  }

  const handleUnderlineClick = () => {
    setTextDecoration(prevDecoration => (prevDecoration === 'underline' ? 'none' : 'underline'));
    applyStyleToSelection('textDecoration', textDecoration === 'underline' ? 'none' : 'underline');
  }

  const handleAlignLeftClick = () => {
    setTextAlign('left');
    applyStyleToSelection('textAlign', 'left');
  }

  const handleAlignCenterClick = () => {
    setTextAlign('center');
    applyStyleToSelection('textAlign', 'center');
  }

  const handleAlignRightClick = () => {
    setTextAlign('right');
    applyStyleToSelection('textAlign', 'right');
  }

  const handleTextTransformClick = () => {
    setTextTransform(prevTransform => (prevTransform === 'uppercase' ? 'none' : 'uppercase'));
    applyStyleToSelection('textTransform', textTransform === 'uppercase' ? 'none' : 'uppercase');
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
    applyStyleToSelection('color', e.target.value);
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
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{font}</button>
                <ul class="dropdown-menu">
                  <li className='dropdown-item' onClick={handleChangeFont}>Courier Prime</li>
                  <li className='dropdown-item' onClick={handleChangeFont}>Josefine Sans</li>
                  <li className='dropdown-item' onClick={handleChangeFont}>Poppins</li>
                  <li className='dropdown-item' onClick={handleChangeFont}>Roboto</li>
                  <li className='dropdown-item' onClick={handleChangeFont}>Space Grotesk</li>
                  <li className='dropdown-item' onClick={handleChangeFont}>Space Mono</li>
                </ul>
              </div>
              <div className="option-sec first">
                <button onClick={handleFontSizeChange} data-action="decrease">-</button>
                <input type="number" className="name" min="1" max='100' value={fontSize} onChange={handleFontSizeChange} />
                <button onClick={handleFontSizeChange} data-action="increase" className="plus">+</button>
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
                  fontFamily: font
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