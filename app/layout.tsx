"use client";
import React from 'react';

import './styles/main.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { motion, useSpring, useScroll } from 'framer-motion';

import Navigation from './components/Navigation/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Portfolio | Blogs ",
  description: "Created by Freetime 07.2023"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollYProgress = useScroll().scrollYProgress;
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <motion.div className='progress-bar' style={{ scaleX: scaleX }}></motion.div>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
