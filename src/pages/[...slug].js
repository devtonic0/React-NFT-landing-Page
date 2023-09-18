import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Slug = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/about') {
      router.push('/?scrollTo=about');
    }
  }, [router.asPath]);

  return null;
};

export default Slug;