// components/OrderPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import './OrderPage.css';
import ONpic from '../assets/images/ONpic.jpg';
import Logo from '../assets/images/Logo.png';
import EatHere from '../assets/images/EatHere.png';
import TakeAway from '../assets/images/TakeAway.png';
import Delivery from '../assets/images/Delivery.png';
import logsign from '../assets/images/logsign.png';
import orderhistory from '../assets/images/orderhistory.png';
import favoriteicon from '../assets/images/favoriteicon.png';
import logout from '../assets/images/logout.png';
import { Link } from 'react-router-dom';
import { useUser } from './UserContext';

function OrderPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleRef = useRef(null);
    const { user, isLoggedIn, logout: logoutUser } = useUser();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        logoutUser();
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="order-page">
            <div className="order-container">

                <div className="hero-image">
                    <img src={ONpic} alt="Order Now" className="hero-img" loading="eager" />

                    {/* Menu Toggle + Login Button Combined */}
                    <div className="menu-login-container">
                        <div className="menu-toggle" onClick={toggleMenu} ref={toggleRef}>
                            <div className="menu-icon">
                                <span className="menu-line"></span>
                                <span className="menu-line"></span>
                            </div>
                        </div>
                        {isLoggedIn ? (
                            <div className="login-button" style={{ cursor: 'default' }}>
                                <span className="signup-text">Welcome</span>
                                {user?.firstName || 'User'}
                            </div>
                        ) : (
                            <Link to="/login" className="login-button">
                                <span className="signup-text">Sign up</span>
                                Log in
                            </Link>
                        )}
                    </div>

                    {/* Side Menu */}
                    <div className={`side-menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
                        <div className="side-menu-content">
                            {isLoggedIn ? (
                                <div className="menu-item user-info">
                                    <span className="menu-item-text">{user?.firstName} {user?.lastName}</span>
                                </div>
                            ) : (
                                <Link to="/login" className="menu-item">
                                    <img src={logsign} alt="Login" className="menu-item-icon" />
                                    <span className="menu-item-text">LOG IN / SIGN UP</span>
                                </Link>
                            )}
                            <div className="menu-item">
                                <img src={orderhistory} alt="Order History" className="menu-item-icon" />
                                <span className="menu-item-text">Order history</span>
                            </div>
                            <div className="menu-item">
                                <img src={favoriteicon} alt="My Favorites" className="menu-item-icon" />
                                <span className="menu-item-text">My Favorites</span>
                            </div>
                            {isLoggedIn && (
                                <div className="menu-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                                    <img src={logout} alt="logout" className="menu-item-icon" />
                                    <span className="menu-item-text">Logout</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="logo-overlay">
                        <Link to="/">
                            <img src={Logo} alt="Logo" className="logo-img" />
                        </Link>
                    </div>
                    <div className="rectangle-box">
                        <div className="box-section">
                            <Link to="/kitchens" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={EatHere} alt="Eat Here" className="section-icon" />
                                <span className="section-text" style={{ fontSize: ' 20px' }}>EAT HERE</span>
                            </Link>
                        </div>
                        <div className="box-section2">
                            <img src={TakeAway} alt="Take Away" className="section-icon2" />
                            <span className="section-text2" style={{ fontSize: ' 20px', marginTop: '4px' }}>TAKE AWAY</span>
                        </div>
                        <div className="box-section3">
                            <img src={Delivery} alt="Delivery" className="section-icon3" />
                            <span className="section-text3" style={{ fontSize: ' 20px', marginBottom: '4px' }}>DELIVERY</span>
                        </div>
                    </div>
                </div>

                <div className="empty-content"></div>
            </div>
        </div>
    );
}

export default OrderPage;