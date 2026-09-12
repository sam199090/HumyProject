// src/components/Faq.jsx
import React, { useState } from 'react';
import './Faq.css';
import logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import FooterLogoImg from '../assets/images/FooterLogoImg.png';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AppGoogleW from '../assets/images/AppGoogleW.png';

function Faq() {


    const handleMouseMove = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const circle = btn.querySelector('.circle');

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.style.width = '300px';
    };
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleMouseLeave = (e) => {
        const circle = e.currentTarget.querySelector('.circle');
        circle.style.width = '0';
    };
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What Is Humy App?",
            answer: (
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,</p>
                    <p> metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Sed dignissim,ut interdum tellus elit</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                    <p>Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                </>
            )
        },
        {
            question: "How To Add Money To Your Wallet?",
            answer: (
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,</p>
                    <p> metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Sed dignissim,ut interdum tellus elit</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                    <p>Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                </>
            )
        },
        {
            question: "Changing name?",
            answer: (
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,</p>
                    <p> metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Sed dignissim,ut interdum tellus elit</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                    <p>Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                </>
            )
        },
        {
            question: "How Can I Be Provider In The App?",
            answer: (
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,</p>
                    <p> metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Sed dignissim,ut interdum tellus elit</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                    <p>Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                </>
            )
        },
    ];

    return (
        <div className="faq-page">
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

            {/* FAQ Section */}
            <section className="faq-header-section">
                <h2 className="faq-title">
                    <span className="faq-text">Faq</span>
                </h2>
            </section>

            {/* Faq Questions */}
            <section className="faq-questions-section">
                <div className="faq-container">
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div
                                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <span>{item.question}</span>
                                <span className="faq-arrow">{openIndex === index ? '▲' : '▼'}</span>
                            </div>
                            <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
                                <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Contact US */}
            <section className="download-section">
                <div className="download-container">
                    <h2 className="download-title">
                        <span className="white-text">For More Information</span><br />
                        <span className="orange-text">Don't Hesitate To Contact US</span>
                    </h2>

                    <a
                        href="#"
                        className="download-btn-custom"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="btn-inner">
                            <div className="btn-label">Contact US</div>
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

export default Faq;