import './AboutPage.css';
import logo from '../assets/images/Logo.png';
import UniqueImage from '../assets/images/unique-image.png';
import Johnwick from '../assets/images/Johnwick.png';
import Johnwick2 from '../assets/images/Johnwick2.png';
import Johnwick3 from '../assets/images/Johnwick3.png';
import Johnwick4 from '../assets/images/Johnwick4.png';
import Johnwick5 from '../assets/images/Johnwick5.png';
import Johnwick6 from '../assets/images/Johnwick6.png';
import Johnwick7 from '../assets/images/Johnwick7.png';
import Johnwick8 from '../assets/images/Johnwick8.png';
import zucchini from '../assets/images/zucchini.png';
import FooterLogoImg from '../assets/images/FooterLogoImg.png';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function AboutPage() {
    // useState useEffect
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        // Modern Family Cards Animation (useEffect)
        const familyObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 80);
                }
            });
        }, { threshold: 0.2 });

        const familyCards = document.querySelectorAll('.family-card');
        familyCards.forEach(card => familyObserver.observe(card));
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.3 });

        const titleIds = [
            'about-title',
            'features-title',
            'partner-title',
            'testimonials-title',
            'cuisines-title',
            'family-title'
        ];

        titleIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // (Mouse Follow Circle)
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

    const handleMouseLeave = (e) => {
        const circle = e.currentTarget.querySelector('.circle');
        circle.style.width = '0';
    };

   
  return (
        <div className="about-page">
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
            {/* About*/}
            <section className="about-section">

                <h2 className="about-title">
                    <span className="white-text">About Humy </span><br />

                </h2>


            </section>

            {/* What is Humy Section */}
            <section className="what-is-humy">
                <div className="what-is-container">
                    <h3 className="what-is-title">what is Humy?</h3>
                    <p className="what-is-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                        imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                        feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                        sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                        tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
                        eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
                    </p>

                    {/* Why it's unique Section -  */}
                    <div className="unique-container">
                        <div className="unique-left">
                            <h3 className="unique-title">Why it's unique!?</h3>
                            <p className="unique-text">
                                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
                                sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
                                luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                                Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                                Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                                Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
                            </p>
                        </div>
                        <div className="unique-right">
                            <img src={UniqueImage} alt="Why it's unique" className="unique-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Family Section */}
            <section className="family-section">
                <h2 className="family-title title-animate" id="family-title">
                    {"Our Family".split("").map((char, index) => (
                        <span
                            key={index}
                            style={{ transitionDelay: `${index * 35}ms` }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h2>
                <div className="family-grid">
                    {/* first row*/}
                    <div className="family-row">
                        <div className="family-card">
                            <img src={Johnwick} alt="Johnwick" className="family-image" />
                            <p className="family-name">Johnwick</p>
                            <p className="family-role">Founder / Ceo</p>
                        </div>
                        <div className="family-card">
                            <img src={Johnwick2} alt="Johnwick2" className="family-image" />
                            <p className="family-name">Johnwick</p>
                            <p className="family-role">Founder / Ceo</p>
                        </div>
                        <div className="family-card">
                            <img src={Johnwick3} alt="Johnwick3" className="family-image" />
                            <p className="family-name">Johnwick</p>
                            <p className="family-role">Founder / Ceo</p>
                        </div>
                        <div className="family-card">
                            <img src={Johnwick4} alt="Johnwick4" className="family-image" />
                            <p className="family-name">Johnwick</p>
                            <p className="family-role">Founder / Ceo</p>
                        </div>
                    </div>
                    {/* second*/}
                    <div className="family-row">
                        <div className="family-card">
                            <img src={Johnwick5} alt="Johnwick5" className="family-image" />
                            <p className="family-name">Johnwick</p>
                            <p className="family-role">Founder / Ceo</p>
                        </div>
                        <div className="family-card">
                            <img src={Johnwick6} alt="Johnwick6" className="family-image" />
                            <p className="family-name">Johnwick</p>
                            <p className="family-role">Founder / Ceo</p>
                        </div>
                        <div className="family-card">
                            <img src={Johnwick7} alt="Johnwick7" className="family-image" />
                            <p className="family-name">Johnwick</p>
                            <p className="family-role">Founder / Ceo</p>
                        </div>
                        <div className="family-card">
                            <img src={Johnwick8} alt="Johnwick8" className="family-image" />
                            <p className="family-name">Johnwick</p>
                            <p className="family-role">Founder / Ceo</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Join Our Family Section */}
            <section className="join-family-section">
                <div className="join-family-container">
                    <div className="join-family-content">
                        <h2 className="join-family-title">Join Our Family</h2>

                        <a
                            href="#"
                            className="download-btn-custom join-family-btn"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="btn-inner">
                                <div className="btn-label">Apply HERE</div>
                                <div className="circle-wrapper">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="join-family-image">
                        <img src={zucchini} alt="Zucchini" />
                    </div>
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
                                <li><a href="/kitchens">Kitchens</a></li>
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
                                <li><Link to="/contact">Contact us</Link></li>                            </ul>
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

export default AboutPage;