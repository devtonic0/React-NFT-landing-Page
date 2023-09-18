import React, { forwardRef, useImperativeHandle } from 'react';
import { motion } from 'framer-motion';
import useInView from './useInView';


const About = forwardRef((_, ref) => {
  const [internalRef, inView] = useInView();
  About.displayName = "About";
  
  useImperativeHandle(ref, () => ({
    get node() {
      return (internalRef as React.RefObject<HTMLDivElement>).current;
    }
  }));
  
  return (
    <div ref={internalRef as React.RefObject<HTMLDivElement>}>
    <motion.div 
    className="about"
    initial={{ opacity: 0 }}
    animate={{ opacity: inView ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
    <motion.div 
      className='aboutLeft'
      initial={{ x: '-100vw' }}
      animate={{ x: inView ? 0 : '-100vw' }}
      transition={{ delay: 0.1, duration: 0.8 }}
    >
        <div className='aboutLeftText'>
          <h1>About</h1>
          <h2>At its core, Cookie is an innovative NFT project that revolves around three fundamental principles: Community, Art, and Lore. These pillars form the foundation of all our future endeavors, and we consistently prioritize them in our technical, promotional, and creative decision-making.</h2>
          <h2>However, Cookie&apos;s mission extends beyond these pillars, as our team aspires to revolutionize the NFT experience, making it seamless, enjoyable, and thrilling. Cookie reimagines mundane aspects such as NFT minting, collections, and burning, introducing a new standard for executing these common actions.</h2>
        </div>
      </motion.div>
      <motion.div 
        className='aboutRight'
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img src='./Art/Mia.png' alt='About Cookie NFT' />
      </motion.div>
    </motion.div>
    
    </div>
  );
});

export default About;