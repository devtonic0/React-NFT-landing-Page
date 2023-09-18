import React from 'react';
import '../styles/global.css';
import { AppProps } from 'next/app';
import ScrollToTopButton from '@/components/scrollToTop';
import ScrollButton from '@/components/scrollButton'


function MyApp({ Component, pageProps }: AppProps) {
  return (
<>
      <Component {...pageProps} />
      <ScrollToTopButton/>
      <ScrollButton />
      </>
  );
}

export default MyApp;
