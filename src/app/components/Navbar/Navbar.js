'use client';
import { useState } from 'react';
import './Navbar.css'

const Navbar= () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }
    return (
        <>
        <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </nav>

        <img className='menu-icon' src="./images/menu-icon.png" alt="menu" onClick={toggleMenu} />

        <div className={`nav-mobile ${isOpen ? "open-menu" : '' } `}>
            <div className="mobile-nav">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </div>

        </>
    );
}

export default Navbar