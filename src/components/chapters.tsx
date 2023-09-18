import React, { useEffect, useRef } from 'react';



const Chapters = () => {
  const midSectionRef = useRef(null);
  const bottomSectionRef = useRef(null);

  useEffect(() => {
    const observerMid = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const observerBottom = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sa');
        } else {
          entry.target.classList.remove('sa');
          
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    );

    if (midSectionRef.current) {
      observerMid.observe(midSectionRef.current);
    }

    if (bottomSectionRef.current) {
      observerBottom.observe(bottomSectionRef.current);
    }

    return () => {
      if (midSectionRef.current) {
        observerMid.unobserve(midSectionRef.current);
      }

      if (bottomSectionRef.current) {
        observerBottom.unobserve(bottomSectionRef.current);
      }
    };
  }, []);
    
  
  return (
    <div className="chapters">
      <div className='chaptersHead'>
        <h1>Chapter I</h1>
        <h2>Our project&apos;s evolution unfolds through distinct chapters, each ushering in a wave of innovative tools into our ecosystem.</h2>
        <h2>Inaugurating Chapter I, our paramount objective revolves around pioneering Dynamic NFTs, imbued with traits that can be effortlessly customized by their respective holders. The Mia Clone collection stands as a testament to our commitment to this cause.</h2>
        <h2>In conjunction with the forthcoming Cookie OS release, our project will deliver a comprehensive suite of indispensable tools requisite for any NFT project. These encompass Staking, Burning, Raffles, Auctions, and more. Each tool carries a familiar essence, meticulously reimagined from the ground up by the ingenious Cookie team.</h2>
      </div>
      <div className='chaptersMid' ref={midSectionRef}>
      <svg width="100%" height="100%">
        <line x1="100%" y1="50%" x2="75%" y2="50%" className="line1" stroke="#fff" stroke-width="3%" />
        <circle cx="68%" cy="50%" r="10%" className="circle1" stroke="#fff" fill="none" stroke-width="2%"  stroke-linecap="round"/>
       

        <line x1="60.5%" y1="50%" x2="32%" y2="50%" className="line2" stroke="#fff" stroke-width="3%" />
        <circle cx="25%" cy="50%" r="10%" className="circle2" stroke="#fff" fill="none" stroke-width="2%"  stroke-linecap="round"/>
        <circle cx="25%" cy="50%" r="7%" className="dot2" stroke="transparent" fill="#fff" />
      </svg>
      </div>
      <div className='chaptersMidMobile' ref={midSectionRef}>
      <svg width="100%" height="100%">
        
        <line x1="100%" y1="50%" x2="55%" y2="50%" className="line2" stroke="#fff" stroke-width="5%" />
        <circle cx="40%" cy="50%" r="20%" className="circle2" stroke="#fff" fill="none" stroke-width="4%"  stroke-linecap="round"/>
        <circle cx="40%" cy="50%" r="14%" className="dot2" stroke="transparent" fill="#fff" />
      </svg>
      </div>
      <div className='chaptersBottom' ref={bottomSectionRef}>
        <div className='chaptersBottomLeft'>
          <h1>Chapter I</h1>
          <ul className="customList">
  <li className="greenCheck">Mia Clones Collection Launch</li>
  <li className="greenCheck">Cookie Recycler Launch</li>
  <li className="greenCheck">Cookie Tool Store Launch</li>
  <li className="greenCheck">Staking Launch</li>
  <li className="whiteDot">Cookie OS - Trait Packs Launch</li>
  <li className="whiteDot">Cookie OS - Locker Room Launch</li>
  <li className="whiteDot">Cookie OS - Auction Launch</li>
  
</ul>
        </div>
        <div className='chaptersBottomRight'>
        <h1>Chapter II</h1>
        <ul className="customList">
        <li className="whiteDot"><h3>   - </h3></li>
        <li className="whiteDot"><h3>   - </h3></li>
        <li className="whiteDot"><h3>   - </h3></li>
        <li className="whiteDot"><h3>   - </h3></li>
        <li className="whiteDot"><h3>   - </h3></li>
        <li className="whiteDot"><h3>   - </h3></li>
        <li className="whiteDot"><h3>   - </h3></li>
        </ul>
        </div>
      
      </div>
      
    </div>
  );
};

export default Chapters;