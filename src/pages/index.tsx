import Header from '../components/header'; // Adjust the path as necessary
import Head from 'next/head';
import Home from '../components/home';
import About from '../components/about';
import Collections from '../components/collections';
import Chapters from '@/components/chapters';
import Connected from '@/components/connected';
import Footer from '@/components/footer';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import scrollTotopButton from '../components/scrollToTop'
const HomePage = () => {
  type AboutRefType = {
    node: HTMLDivElement | null;
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const aboutRef = useRef<AboutRefType | null>(null);
  const router = useRouter();

  useEffect(() => {
    
    if (router.query.scrollTo === 'about' && aboutRef.current?.node) {
      aboutRef.current.node.scrollIntoView({ behavior: 'smooth' });
    }
  }, [router.pathname, router.query, aboutRef.current?.node]);
  return (
    
    <div className='main'>
        <Head>
      <title>Cookie Home</title>
      <meta name="description" content="The CookieVerse starts here." />
      <link rel="icon" href="./favicon.ico" />
    </Head>
      <Header />
      <Home />
      <About ref={aboutRef} />
      <Collections />
      <Chapters />
      <Connected />
      <Footer />
     
    </div>
  );
};

export default HomePage;
