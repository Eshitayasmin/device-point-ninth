import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <Link to='/home'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/dashboard'>DashBoard</Link>
            <Link to='/Blogs'>Blogs</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;