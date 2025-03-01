"use client";

import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css';
import '@components/Header.css';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the scales page
    router.push('/scales');
  }, [router]);

  return null; // Render nothing as the user is being redirected
};

export default Home;