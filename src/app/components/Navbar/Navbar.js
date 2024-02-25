'use client';
import { useState } from 'react';
import './Navbar.css'
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                    <Link href={"/"}>Home</Link>
                    <Link href="#projects-section">Projects</Link>
                    <Link href="#contact-me" >Contact</Link>
            </nav>

            <img className='menu-icon' src="./images/menu-icon.png" alt="menu" onClick={toggleMenu} />

            <div className={`nav-mobile ${isOpen ? "open-menu" : ''}`}>
                <div className="mobile-nav">
                    <Link href={"/"} onClick={closeMenu}>Home</Link>
                    <Link href="#projects-section" onClick={closeMenu}>Projects</Link>
                    <Link href="#contact-me" onClick={closeMenu}>Contact</Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
