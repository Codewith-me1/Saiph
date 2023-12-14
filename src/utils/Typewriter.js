


import React, { useState, useEffect } from 'react';

const Typewriter = ({
  sentence,
  typingSpeed = 50,
  pauseTime = 3000,
  eraseSpeed = 30,
  loop = true,
}) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const sentenceLength = sentence.length;

    const handleTyping = () => {
      if (text.length < sentenceLength) {
        setText(sentence.substring(0, text.length + 1));
      } else if (loop === false) {
        setIsTyping(false);
        setTimeout(() => {
          setIsErasing(false);
        }, pauseTime);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsErasing(true);
        }, pauseTime);
      }
    };

    const handleErasing = () => {
      if (text.length > 0) {
        setText(text.substring(0, text.length - 1));
      } else {
        setIsErasing(false);
        setText(''); // Optional: Clear the text after erasing
        setIsTyping(true);
      }
    };

    if (isTyping) {
      const typingInterval = setInterval(() => {
        handleTyping();
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    } else if (isErasing) {
      const erasingInterval = setInterval(() => {
        handleErasing();
      }, eraseSpeed);

      return () => clearInterval(erasingInterval);
    }
  }, [text, sentence, isTyping, typingSpeed, pauseTime, eraseSpeed, isErasing, loop]);

  return (
    <div className="text-2xl">
      {text}
      <span className="blinking-line from-[#6366F1] via-[#D946EF] to-[#FB7185] bg-gradient-to-r bg-clip-text text-transparent">|</span>
    </div>
  );
};

export default Typewriter;
