import React, { useEffect, useRef } from 'react';

const Home = () => {
    const layeredImagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
          if (!layeredImagesRef.current) return;
      
          const { clientX, clientY } = event;
          const { offsetWidth, offsetHeight } = layeredImagesRef.current;
          const xPos = (clientX / offsetWidth - 0.2) * 6;
          const yPos = (clientY / offsetHeight - 0.2) * -6;
      
          layeredImagesRef.current.style.transform = `rotateY(${xPos}deg) rotateX(${yPos}deg)`;
        };
      
        if (layeredImagesRef.current) {
          layeredImagesRef.current.addEventListener('mousemove', handleMouseMove);
        }
      
        return () => {
          if (layeredImagesRef.current) {
            layeredImagesRef.current.removeEventListener('mousemove', handleMouseMove);
          }
        };
      }, [layeredImagesRef.current]);
  return (
    <div className="mainBody">
      <div className="layeredImages" ref={layeredImagesRef}>
        <img src="/Art/skateMia/skateMiaBG.png" alt="Image 2" />
        <img src="/Art/skateMia/skateMia.png" alt="Image 1" />
      </div>
    </div>
  );
};

export default Home;
