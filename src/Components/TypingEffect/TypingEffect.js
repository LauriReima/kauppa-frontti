import React, { useState, useEffect } from 'react';

const TypingEffect = ({ sentence, question, inputColor }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(' ');
    if (sentence) {
      const delay = 50;
      let index = 0;
  
      const typingInterval = setInterval(() => {
        setDisplayedText((prevText) => {
          if (index < sentence.length) {
            return prevText.concat(sentence[index]);
          } else {
            clearInterval(typingInterval);
            return prevText;
          }
        });
  
        index += 1;
      }, delay);

    }
  }, [sentence]);

  return (
    <div className='answerBoard' style={{backgroundColor: inputColor}}>
        {/* <div>{question}</div> */}
        <div>{displayedText}</div>
    </div>
  );
};

export default TypingEffect;