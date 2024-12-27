
import React, { ReactNode } from 'react'

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: ReactNode;
}
export default function layout({children}: LayoutProps) {
  return (
    <html>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
