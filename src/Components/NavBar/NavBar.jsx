import React from 'react';
import logo from './assets/logo.svg';
import kids from './assets/kids.svg';
import './NavBar.css';

function NavBar() {
    return (
        <div className='navbar'>
            <a href='#' className='bi-a'><i class="bi bi-list"></i></a>
            <img src={logo} alt="Logo" className="brand-logo"/>
            <ul className="nav-links">
                <li className="nav-items"><a href="#">TV</a></li>
                <li className="nav-items"><a href="#">Movies</a></li>
                <li className="nav-items"><a href="#">Sports</a></li>
                <li className="nav-items"><a href="#">Disney+</a></li>
                <li className="nav-items"><a href='#'><img src={kids} alt="Kids" /></a></li>
            </ul>
            <div className="right-container">
                <input type="text" className="search-box" placeholder="search" />
                <button className="sub-btn">subscribe</button> 
                <a href="#" className="login-link">Login</a>
            </div>
        </div>
    )
}

export default NavBar
