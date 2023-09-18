import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from './useInView';

const Collections = () => {
  const collectionImageRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView();
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!collectionImageRef.current) return;

      const { clientX, clientY } = event;
      const { offsetWidth, offsetHeight } = collectionImageRef.current;
      const xPos = (clientX / offsetWidth - 0.5) * 6;
      const yPos = (clientY / offsetHeight - 0.5) * -6;

      collectionImageRef.current.style.transform = `rotateY(${xPos}deg) rotateX(${yPos}deg)`;
    };

    if (collectionImageRef.current) {
      collectionImageRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (collectionImageRef.current) {
        collectionImageRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
    <motion.div 
    className="collection"
    initial={{ opacity: 0 }}
    animate={{ opacity: inView ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
      <div className='collectionLeft'>
      <div className='collectionImage' ref={collectionImageRef}>
<img src='./Art/MiaKit.png'></img>
</div>
      </div>
      <div className='collectionRight'>
        <div className='collectionText'>
<h1>Collections</h1>
<h2>Currently, Cookie presents two primary collections tailored for our valued holders: the Cookie Mia Clones and the Cookie Mia Kits.</h2>
<h2>Both of these collections played a central role in the engaging and exhilarating reveal process that we proudly introduced during our minting phase. Holders now have the delightful opportunity to unveil their clones by opening their Kits.</h2>

<div className='me-links'>
<a href="https://magiceden.io/marketplace/mia_kits" target="_blank" rel="noopener noreferrer">
  <img src="./Buttons/mekits.png" alt="Buy Kits on ME" />
</a>
<a href="https://magiceden.io/marketplace/mia_clones" target="_blank" rel="noopener noreferrer">
  <img src="./Buttons/memia.png" alt="Buy Clones on ME" />
</a>
</div>
</div>
      </div>
      
      </motion.div>
      </div>
   
  );
};

export default Collections;