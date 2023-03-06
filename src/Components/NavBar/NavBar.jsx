import React, {useRef, useState} from 'react';
import logo from './assets/logo.svg';
import kids from './assets/kids.svg';
import { useOnHoverOutside } from "../Hooks/useOnHoverOutside";
import './NavBar.css';

function NavBar() {
    const dropdownRef = useRef(null); // Create a reference for dropdown container
    const [isSideMenu, setSideMenu] = useState(false)

    // Function to close dropdown
    const closeHoverMenu = () => {
        setSideMenu(false);
    };

    useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
    return (
        <div className='navbar' ref={dropdownRef}>
            <i class="bi bi-list" onMouseOver={() => setSideMenu(true)}></i>
            {isSideMenu && <SideMenu />}
            <img src={logo} alt="Logo" className="brand-logo"/>
            <ul className="nav-links">
                <li className="nav-items"><a href="#">TV</a></li>
                <li className="nav-items"><a href="#">Movies</a></li>
                <li className="nav-items"><a href="#">Sports</a></li>
                <li className="nav-items"><a href="#">Disney+</a></li>
                <li className="nav-items"><a href='#'><img src={kids} alt="Kids" /></a></li>
            </ul>
            <div className="right-container">
                <div className="inputWithIcon">
                    <input type="text" className="search-box" placeholder="search" />
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                <button className="sub-btn">subscribe</button> 
                <a href="#" className="login-link">Login</a>
            </div>
        </div>
    )
}

function SideMenu() {
    return (
        <div className="dropdown-menu">
            <ul className="side-links">
                <a href="#"><li className="side-items"><i class="bi bi-collection-play"></i><p>Channels</p></li></a>
                <a href="#"><li className="side-items"><i class="bi bi-translate"></i><p>Languages</p></li></a>
                <a href="#"><li className="side-items"><i class="bi bi-collection-fill"></i><p>Geners</p></li></a>
            </ul>
        </div>
    )
}

export default NavBar
