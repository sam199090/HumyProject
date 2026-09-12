// src/components/ContactUs.jsx
import './ContactUs.css';
import logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import FooterLogoImg from '../assets/images/FooterLogoImg.png';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AppGoogleW from '../assets/images/AppGoogleW.png';
import React, { useState } from 'react';

function ContactUs() {


    const handleMouseMove = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const circle = btn.querySelector('.circle');

        if (!circle) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.style.width = '280px';
        circle.style.height = '280px';
    };
const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handleMouseLeave = (e) => {
        const circle = e.currentTarget.querySelector('.circle');
        if (circle) {
            circle.style.width = '0';
            circle.style.height = '0';
        }
    };
    return (
        <div className="contact-page">
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <div className="logo-section">
                        <Link to="/">
                            <img src={logo} alt="Humy Logo" className="logo" />
                        </Link>
                    </div>

                    <div className="search-section">
                        <input
                            type="text"
                            placeholder="search"
                            className="search-input"
                        />
                    </div>

                    <nav className="nav-section">
                        <Link to="/offers" className="btn-animate-chars is-navlink">
                            <span className="navbar-link_text">
                                <span style={{ transitionDelay: '0s' }}>O</span>
                                <span style={{ transitionDelay: '0.01s' }}>f</span>
                                <span style={{ transitionDelay: '0.02s' }}>f</span>
                                <span style={{ transitionDelay: '0.03s' }}>e</span>
                                <span style={{ transitionDelay: '0.04s' }}>r</span>
                                <span style={{ transitionDelay: '0.05s' }}>s</span>
                            </span>
                        </Link>

                    

                        <Link to="/partner" className="btn-animate-chars is-navlink">
                            <span className="navbar-link_text">
                                <span style={{ transitionDelay: '0s' }}>B</span>
                                <span style={{ transitionDelay: '0.01s' }}>e</span>
                                <span style={{ transitionDelay: '0.02s' }}>c</span>
                                <span style={{ transitionDelay: '0.03s' }}>o</span>
                                <span style={{ transitionDelay: '0.04s' }}>m</span>
                                <span style={{ transitionDelay: '0.05s' }}>e</span>
                                <span style={{ transitionDelay: '0.06s' }}> </span>
                                <span style={{ transitionDelay: '0.07s' }}>o</span>
                                <span style={{ transitionDelay: '0.08s' }}>u</span>
                                <span style={{ transitionDelay: '0.09s' }}>r</span>
                                <span style={{ transitionDelay: '0.1s' }}> </span>
                                <span style={{ transitionDelay: '0.11s' }}>P</span>
                                <span style={{ transitionDelay: '0.12s' }}>a</span>
                                <span style={{ transitionDelay: '0.13s' }}>r</span>
                                <span style={{ transitionDelay: '0.14s' }}>t</span>
                                <span style={{ transitionDelay: '0.15s' }}>n</span>
                                <span style={{ transitionDelay: '0.16s' }}>e</span>
                                <span style={{ transitionDelay: '0.17s' }}>r</span>
                            </span>
                        </Link>

                        <Link to="/blog" className="btn-animate-chars is-navlink">
                            <span className="navbar-link_text">
                                <span style={{ transitionDelay: '0s' }}>B</span>
                                <span style={{ transitionDelay: '0.01s' }}>l</span>
                                <span style={{ transitionDelay: '0.02s' }}>o</span>
                                <span style={{ transitionDelay: '0.03s' }}>g</span>
                            </span>
                        </Link>
                        {/* Order Now */}
                        <Link to="/order" className="order-now-btn" onClick={() => setShowMobileMenu(false)} >
                            ORDER NOW
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Contact Us Section */}
            <section className="contact-header-section" style={{ width: '1200px' }}>
                <h2 className="contact-title">Contact Us</h2>
            </section>


            {/* Contact Form Section */}
            <section className="contact-form-section">
                <div className="contact-form-container">
                    {/* first row - 2 columns*/}
                    <div className="form-row">
                        <div className="form-group" style={{ marginRight: '20px' }}>
                            <label><span className="full-name-text">Full Name</span></label>

                            <input type="text" placeholder="Enter your full name" className="form-input" />
                        </div>
                        <div className="form-group" style={{ marginRight: '20px' }}>
                            <label><span className="number-text">Number</span></label>
                            <input type="tel" placeholder="Enter your phone number" className="form-input" />
                        </div>
                    </div>

                    {/* second row*/}
                    <div className="form-row">
                        <div className="form-group" style={{ marginRight: '20px' }}>
                            <label><span className="contact-reason-text">Contact Reason</span></label>
                            <select className="form-input" style={{
                                appearance: 'none',
                                WebkitAppearance: 'none',
                                MozAppearance: 'none',
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23565656' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 12px center',
                                backgroundSize: '12px',
                                paddingLeft: '14px',
                                cursor: 'pointer',
                                color: '#565656',

                                width: '100%'
                            }}>
                                <option value="">Select a reason</option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Customer Support</option>
                                <option value="partnership">Partnership</option>
                                <option value="feedback">Feedback</option>
                                <option value="complaint">Complaint</option>
                            </select>
                        </div>
                        <div className="driver-form-group" style={{ marginRight: '20px', color: '#565656', }}>
                            <label><span className="country-text" style={{ marginRight: '20px' }}>Country</span></label>
                            <select className="driver-input" style={{
                                appearance: 'none',
                                WebkitAppearance: 'none',
                                MozAppearance: 'none',
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23565656' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 12px center',
                                backgroundSize: '12px',
                                paddingLeft: '14px',
                                cursor: 'pointer',
                                marginTop: '5px',
                                color: '#565656',
                                width: '100%'
                            }}>
                                <option value="" >Select your country</option>
                                <option value="usa">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="uae">United Arab Emirates</option>
                                <option value="saudi">Saudi Arabia</option>
                                <option value="egypt">Egypt</option>
                                <option value="turkey">Turkey</option>
                                <option value="jordan">Jordan</option>
                                <option value="lebanon">Lebanon</option>
                                <option value="kuwait">Kuwait</option>
                                <option value="qatar">Qatar</option>
                                <option value="bahrain">Bahrain</option>
                                <option value="oman">Oman</option>
                            </select>
                        </div>
                    </div>

                    {/* third row- Notes */}
                    <div className="form-row" style={{ marginRight: '20px' }}>
                        <div className="form-group full-width">
                            <label><span className="notes-text" style={{ marginRight: '50px', }}>Notes</span></label>

                            <textarea
                                placeholder="Write your notes here..."
                                className="form-textarea resizable-textarea"
                                rows="5"
                            ></textarea>
                        </div>
                    </div>

                    {/* Contact Us - Fancy Button */}
                    <div className="form-row" style={{ textAlign: 'center', marginTop: '25px' }}>
                        <button
                            type="submit"
                            className="contact-us-fancy-btn"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="btn-inner">
                                <div className="btn-label">Contact Us</div>
                                <div className="circle-wrapper">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Download */}
            <section className="download-section">
                <div className="download-container">
                    <h2 className="download-title">
                        <span className="white-text">Humy Your Choice for</span><br />
                        <span className="orange-text">Delicious Home Made Food</span>
                    </h2>

                    <a
                        href="#"
                        className="download-btn-custom"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="btn-inner">
                            <div className="btn-label">Download NOW</div>
                            <div className="circle-wrapper">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>


            {/* Footer Section */}


            <footer className="footer-section">
                <div className="footer-container">
                    <div className="footer-columns">
                        {/* first column- Logo */}
                        <div className="footer-column">
                            <div className="footer-logo">
                                <img src={FooterLogoImg} alt="Footer Logo" className="footer-logo-img" />
                            </div>
                        </div>

                        {/* second column*/}
                        <div className="footer-column">
                            <ul className="footer-links">
                                <h4 className="footer-title">Home Made Food</h4>
                                <li><a href="#">Cuisines</a></li>
                                <li><a href="#">Dishes</a></li>
                                <li><Link to="/kitchens">Kitchens</Link></li>
                                <li><Link to="/where-humy-is">Where Humy is</Link></li>
                            </ul>
                        </div>

                        {/* third column*/}
                        <div className="footer-column">
                            <h4 className="footer-title">Be with Humy</h4>
                            <ul className="footer-links">
                                <li>
                                    <Link to="/become-payoneer">Become Payoneer</Link>
                                </li>
                                <li>
                                    <Link to="/become-driver">Become Driver</Link>
                                </li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>

                        {/* fourth column*/}
                        <div className="footer-column">
                            <h4 className="footer-title">About the App</h4>
                            <ul className="footer-links">
                                <li><a href="/about">About Humy</a></li>
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="/terms">Terms & Conditions</Link></li>
                                <li><a href="#">Sitemap</a></li>
                                <li><Link to="/contact">Contact us</Link></li>
                            </ul>
                        </div>

                        {/* fifth column*/}
                        <div className="footer-column">
                            <h4 className="footer-title">Find Us On</h4>
                            <p className="footer-social-label">Our SM:</p>
                            <div className="footer-social">
                                <FaInstagram className="social-icon" />
                                <FaFacebook className="social-icon" />
                                <FaLinkedin className="social-icon" />
                                <FaTwitter className="social-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Copyright */}
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Humy. All rights reserved.</p>
            </div>
        </div>
    );
}

export default ContactUs;