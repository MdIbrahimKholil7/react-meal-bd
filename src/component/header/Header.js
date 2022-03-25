import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <div className='logo'>
                    <h1>Marvel Resturent</h1>
                </div>
                <div className="menu">
                    <a href="/home">Home</a>
                    <a href="/food">Food</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;