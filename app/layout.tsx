import React from 'react';

import './styles/main.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navigation from './components/Navigation/Navigation';
import Menu from './components/Menu/Menu';
import Progressbar from './components/Progressbar';
import { GlobalProvider } from './utils/globalContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Portfolio | Blogs ",
  description: "Created by Freetime 08.2023"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <Progressbar />
          <Navigation />
          <Menu />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
