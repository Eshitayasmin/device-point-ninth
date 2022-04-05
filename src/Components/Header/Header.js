import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/home'>Home</NavLink>

            <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/reviews'>Reviews</NavLink>

            <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/dashboard'>DashBoard</NavLink>

            <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/blogs'>Blogs</NavLink>

            <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/about'>About</NavLink>
        </div>
    );
};

export default Header;