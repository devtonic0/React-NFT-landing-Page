import React, { useState, useEffect } from 'react';

function ScrollButton() {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const bottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 2;
    setIsBottom(bottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPosition = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight + window.pageYOffset, behavior: 'smooth' });
    }
  };

  return (
    <button className="scroll-button" onClick={scrollToPosition}>
      <img src='./Buttons/mobileScroll.svg' alt="scroll" className={isBottom ? 'rotate-180' : ''} />
    </button>
  );
}

export default ScrollButton;
