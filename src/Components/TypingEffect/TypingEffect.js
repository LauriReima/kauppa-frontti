import React, { useState, useEffect } from 'react';

const TypingEffect = ({ sentence, question, inputColor }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('')
    if (sentence) {
        const delay = 50; 
        let index = -1;

        const typingInterval = setInterval(() => {
            
            setDisplayedText((prevText) => prevText.concat(sentence[index]));
            index += 1;

            if (index === sentence.length -1) {
                clearInterval(typingInterval);
            }
            }, delay);

        return () => {
        clearInterval(typingInterval);
        }
    };
  }, [sentence]);

  return (
    <div className='answerBoard' style={{backgroundColor: inputColor}}>
        {/* <div>{question}</div> */}
        <div>{displayedText}</div>
    </div>
  );
};

export default TypingEffect;