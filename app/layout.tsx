"use client";
import React, { createContext, useState } from 'react';

import './styles/main.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { motion, useSpring, useScroll } from 'framer-motion';

import Navigation from './components/Navigation/Navigation';
import Menu from './components/Menu/Menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Portfolio | Blogs ",
  description: "Created by Freetime 07.2023"
}

const GlobalContext = createContext({
  toggle: false,
  handleToggle: () => { }
});

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <GlobalContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
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
        <GlobalProvider>
          <motion.div className='progress-bar' style={{ scaleX: scaleX }}></motion.div>
          <Navigation />
          <Menu />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
