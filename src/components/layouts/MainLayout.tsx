import Head from 'next/head';
import React, { FC } from 'react';
import Navbar from '../ui/Navbar';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next.js + TypeScript + Material-UI</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: '20px 50px' }}>{children}</main>
    </>
  );
};

export default MainLayout;
