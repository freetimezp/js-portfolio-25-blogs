import React from 'react';

import './styles/main.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
