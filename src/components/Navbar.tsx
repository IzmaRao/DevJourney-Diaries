'use client';
import React, { useState } from "react";
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>DevJourney Diaries</div>
      <ul className='navbar-list'>
        <li className='navbar-list-li'><Link href="./">Home</Link></li>
        <li className='navbar-list-li'><Link href="../about">About</Link></li>
        <li className='navbar-list-li'><Link href="../blog">Blogs</Link></li>
        <li className='navbar-list-li'><Link href="../contact">Contact</Link></li>
      </ul>
      <div className="navbar-toggle-div">
      <div className="navbar-toggle" onClick={handleOnClick}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul className={`navbar-menu rounded ${menuOpen ? 'active' : 'hidden'}`}>   
        <li className='nav-list-li'><Link href="./">Home</Link></li>
        <li className='nav-list-li'><Link href="../about">About</Link></li>
        <li className='nav-list-li'><Link href="../blog">Blogs</Link></li>
        <li className='nav-list-li'><Link href="../contact">Contact</Link></li>
      </ul>
      </div>
    </nav>
  )
}
