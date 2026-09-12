
import { useState } from 'react';
import logo from '../assets/images/Logo.png';
import HomePagePic from '../assets/images/HomePagePic.png';
import AppGoogle from '../assets/images/AppGoogle.png';
import Pic1 from '../assets/images/Pic1.png';
import Pic2 from '../assets/images/Pic2.png';
import Pic3 from '../assets/images/Pic3.png';
import Pic4 from '../assets/images/Pic4.png';
import Pic5 from '../assets/images/Pic5.png';
import Pic6 from '../assets/images/Pic6.png';
import Pic7 from '../assets/images/Pic7.png';
import Pic8 from '../assets/images/Pic8.png';
import Pic9 from '../assets/images/Pic9.png';
import Pic10 from '../assets/images/Pic10.png';
import Syrian from '../assets/images/Syrian.png';
import Chinese from '../assets/images/Chinese.png';
import Japanese from '../assets/images/Japanese.png';
import Turkish from '../assets/images/Turkish.png';
import Italian from '../assets/images/Italian.png';
import FooterLogoImg from '../assets/images/FooterLogoImg.png';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AppGoogleW from '../assets/images/AppGoogleW.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import './HomePage.css';

function HomePage() {
    const [showDriverModal, setShowDriverModal] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {

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
            'cuisines-title'
        ];

        titleIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        // ====================== hide the ~~~~======================
        let lastScrollTop = 0;
        const header = document.querySelector('.header');

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 100) {

                header.style.transform = 'translateY(-100%)';
            } else {

                header.style.transform = 'translateY(0)';
            }

            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
        <div className="home-page">
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



                    {/* Hamburger Button - Mobile only*/}

                    <button
                        className="hamburger-btn"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        aria-label="Toggle menu"
                    >
                        <div className={`hamburger-circle ${showMobileMenu ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>

                    {/* Navigation */}
                    <nav className={`nav-section ${showMobileMenu ? 'active' : ''}`}>
                        <Link to="/offers" className="btn-animate-chars is-navlink" onClick={() => setShowMobileMenu(false)}>
                            <span className="navbar-link_text">
                                <span style={{ transitionDelay: '0s' }}>O</span>
                                <span style={{ transitionDelay: '0.01s' }}>f</span>
                                <span style={{ transitionDelay: '0.02s' }}>f</span>
                                <span style={{ transitionDelay: '0.03s' }}>e</span>
                                <span style={{ transitionDelay: '0.04s' }}>r</span>
                                <span style={{ transitionDelay: '0.05s' }}>s</span>
                            </span>
                        </Link>

                         

                        <Link to="/partner" className="btn-animate-chars is-navlink" onClick={() => setShowMobileMenu(false)}>
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

                        <Link to="/blog" className="btn-animate-chars is-navlink" onClick={() => setShowMobileMenu(false)}>
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

            {/* From sally kitchen pic*/}
            <main className="main-content">
                <div className="offer-section">
                    <div className="offer-card">
                        <img src={HomePagePic} alt="Sally Kitchen" className="offer-image" />
                    </div>
                </div>

                {/*About */}
                <div className="about-home-section">
                    <h3 className="about-home-title title-animate" id="about-title">
                        {"About Humy".split("").map((char, index) => (
                            <span
                                key={index}
                                style={{ transitionDelay: `${index * 40}ms` }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h3>

                    <p className="about-home-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus.
                        Sed dignissim, ut interdum tellus elit sed risus.
                    </p>
                    {/* AppStore GooglePlay Section*/}
                    <div className="app-stores">
                        <img src={AppGoogle} alt="Download on App Store and Google Play" className="app-image" />
                    </div>
                </div>

                {/* Humy Features  */}


                <section className="features-section">
                    <h2 className="features-main-title title-animate" id="features-title">
                        {"Humy Features".split("").map((char, index) => (
                            <span
                                key={index}
                                style={{ transitionDelay: `${index * 35}ms` }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h2>

                    <div className="features-grid">

                        <div className="feature-item">
                            <div className="feature-image">
                                <img src={Pic4} alt="Humy Feature" />
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title" style={{ position: 'relative', right: '70px', }}>The first international app   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;specialized in homemade food</h3>
                                <p className="feature-description" style={{ position: 'relative', right: '70px', }}>Over 25 worldwide cuisines serving <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;more than 1200 dishes to choose from</p>
                            </div>
                        </div>


                        <div className="feature-item feature-item-reverse">
                            <div className="feature-image">
                                <img src={Pic1} alt="Payment methods" />
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title" style={{ position: 'relative', right: '100px', }}> Wherever you are <br /> &nbsp;&nbsp;&nbsp;whatever you want</h3>
                                <p className="feature-description" style={{ position: 'relative', right: '57px', position: 'relative', bottom: '10px' }}>Fresh & healthy, prepared specially for</p>
                                <span style={{ position: 'relative', right: '161px', bottom: '15px', fontSize: '12px', color: '#BFBFBF', lineHeight: '1,6' }}>you</span>
                            </div>
                        </div>

                        {/* Pic3 */}
                        <div className="feature-item">
                            <div className="feature-image">
                                <img src={Pic3} alt="Location" />
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title" style={{ position: 'relative', right: '153px', }}>Pay it <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your way </h3>
                                <p className="feature-description" style={{ position: 'relative', right: '74px', lineHeight: '1,6' }}>with specialized payment method  </p>
                                <span style={{ position: 'relative', right: '130px', bottom: '8px', fontSize: '12px', color: '#BFBFBF', lineHeight: '1,6' }}>suitable for you</span>
                            </div>
                        </div>

                        {/* Pic2 */}
                        <div className="feature-item feature-item-reverse">
                            <div className="feature-image">
                                <img src={Pic2} alt="Payment methods" />
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title" style={{ position: 'relative', right: '100px', }}> Wherever you are <br /> &nbsp;&nbsp;&nbsp;whatever you want</h3>
                                <p className="feature-description" style={{ position: 'relative', right: '57px', position: 'relative', bottom: '10px' }}>Fresh & healthy, prepared specially for</p>
                                <span style={{ position: 'relative', right: '161px', bottom: '15px', fontSize: '12px', color: '#BFBFBF', lineHeight: '1,6' }}>you</span>
                            </div>
                        </div>
                    </div>
                </section>


                {/*Become A Partner */}


                <section className="partner-section">
                    <h2 className="partner-main-title title-animate" id="partner-title">
                        {"Become A Partner".split("").map((char, index) => (
                            <span
                                key={index}
                                style={{ transitionDelay: `${index * 35}ms` }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h2>

                    <div className="partner-grid">
                        {/* Become a Driver -Pic5 */}
                        <div className="partner-card">
                            <div className="partner-image">
                                <img src={Pic5} alt="Become 
                A Driver" />
                            </div>
                            <div className="partner-content">
                                <h3 className="partner-title">Become <br />
                                    A Driver</h3>
                                <p className="partner-description">
                                    Lorem ipsum dolor sit amet,<br />
                                    consectetur adipiscing elit.<br />
                                    Etiam eu turpis molestie,<br />
                                    dictum est a, mattis tellus.<br />
                                    Lorem ipsum dolor sit amet,<br />
                                    consectetur adipiscing elit.<br />
                                    Etiam eu turpis molestie,<br />
                                </p>
                                <Link to="/become-driver" className="partner-register">
                                    Register Here
                                </Link>
                            </div>
                        </div>

                        {/* Become a Payoneer Pic6 */}
                        <div className="partner-card2">
                            <div className="partner-content2">
                                <h3 className="partner-title2">Become <br /> A Payoneer</h3>
                                <p className="partner-description2">
                                    Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br />
                                    Etiam eu turpis molestie,<br /> dictum est a, mattis tellus.<br />
                                    Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.<br />
                                    Etiam eu turpis molestie,<br />
                                </p>
                                <Link to="/become-payoneer" className="partner-register2">
                                    Register Here
                                </Link>
                            </div>
                            <div className="partner-image2">
                                <img src={Pic6} alt="Become 
                a Payoneer" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Discover */}

                <section className="discover-section">
                    <div className="discover-container">
                        <div className="discover-image-wrapper">
                            <h2 className="discover-title">Discover the app</h2>
                            <img src={Pic7} alt="Discover" className="discover-bg-image" />
                            <div className="discover-overlay">
                                <img src={AppGoogleW} alt="App Store & Google Play" className="discover-app-image" />
                            </div>
                        </div>
                    </div>
                </section>


                {/*  What users says about Humy App */}
                <section className="testimonials-horizontal-section">
                    <h2 className="testimonials-horizontal-title title-animate" id="testimonials-title">
                        {"What users says about Humy App".split("").map((char, index) => (
                            <span
                                key={index}
                                style={{ transitionDelay: `${index * 35}ms` }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h2>

                    <div className="testimonials-horizontal-wrapper">
                        <div className="testimonials-horizontal-container" id="autoScrollContainer">

                            {/* Review Card 1 */}

                            <div className="testimonial-horizontal-card">
                                <div className="testimonial-horizontal-image">
                                    <img src={`https://randomuser.me/api/portraits/women/65.jpg`} alt="User" />
                                    <div className="rating-stars">★★★★★</div>
                                </div>
                                <div className="testimonial-horizontal-content">
                                    <p className="review-text">
                                        "Amazing homemade food! The quality is exceptional and delivery is always on time.
                                        I've tried multiple cuisines and each one is delicious."
                                    </p>
                                    <div className="reviewer-info">
                                        <h4 className="reviewer-name">Sarah Johnson</h4>
                                        <p className="reviewer-location">New York, USA</p>
                                    </div>
                                    <div className="verified-badge">
                                    </div>
                                </div>
                            </div>

                            {/* Review Card 2 */}
                            <div className="testimonial-horizontal-card">
                                <div className="testimonial-horizontal-image">
                                    <img src={`https://randomuser.me/api/portraits/men/58.jpg`} alt="User" />
                                    <div className="rating-stars">★★★★★</div>
                                </div>
                                <div className="testimonial-horizontal-content">
                                    <p className="review-text">
                                        "Humy is a game changer! The Syrian and Italian kitchens are my favorites.
                                        Fresh, healthy, and tastes just like home cooking."
                                    </p>
                                    <div className="reviewer-info">
                                        <h4 className="reviewer-name">Mohammed Al-Rashed</h4>
                                        <p className="reviewer-location">Dubai, UAE</p>
                                    </div>
                                    <div className="verified-badge">
                                    </div>
                                </div>
                            </div>

                            {/* Review Card 3 */}
                            <div className="testimonial-horizontal-card">
                                <div className="testimonial-horizontal-image">
                                    <img src={`https://randomuser.me/api/portraits/women/68.jpg`} alt="User" />
                                    <div className="rating-stars">★★★★★</div>
                                </div>
                                <div className="testimonial-horizontal-content">
                                    <p className="review-text">
                                        "Finally an app that connects me with real home cooks!
                                        Great variety of dishes and flexible payment options."
                                    </p>
                                    <div className="reviewer-info">
                                        <h4 className="reviewer-name">Emily Chen</h4>
                                        <p className="reviewer-location">Toronto, Canada</p>
                                    </div>
                                    <div className="verified-badge">
                                    </div>
                                </div>
                            </div>

                            {/* Review Card 1 */}
                            <div className="testimonial-horizontal-card">
                                <div className="testimonial-horizontal-image">
                                    <img src={`https://randomuser.me/api/portraits/women/65.jpg`} alt="User" />
                                    <div className="rating-stars">★★★★★</div>
                                </div>
                                <div className="testimonial-horizontal-content">
                                    <p className="review-text">
                                        "Amazing homemade food! The quality is exceptional and delivery is always on time.
                                        I've tried multiple cuisines and each one is delicious."
                                    </p>
                                    <div className="reviewer-info">
                                        <h4 className="reviewer-name">Sarah Johnson</h4>
                                        <p className="reviewer-location">New York, USA</p>
                                    </div>
                                    <div className="verified-badge">
                                    </div>
                                </div>
                            </div>

                            {/* Review Card 2 */}
                            <div className="testimonial-horizontal-card">
                                <div className="testimonial-horizontal-image">
                                    <img src={`https://randomuser.me/api/portraits/men/58.jpg`} alt="User" />
                                    <div className="rating-stars">★★★★★</div>
                                </div>
                                <div className="testimonial-horizontal-content">
                                    <p className="review-text">
                                        "Humy is a game changer! The Syrian and Italian kitchens are my favorites.
                                        Fresh, healthy, and tastes just like home cooking."
                                    </p>
                                    <div className="reviewer-info">
                                        <h4 className="reviewer-name">Mohammed Al-Rashed</h4>
                                        <p className="reviewer-location">Dubai, UAE</p>
                                    </div>
                                    <div className="verified-badge">
                                    </div>
                                </div>
                            </div>

                            {/* Review Card 3 */}
                            <div className="testimonial-horizontal-card">
                                <div className="testimonial-horizontal-image">
                                    <img src={`https://randomuser.me/api/portraits/women/68.jpg`} alt="User" />
                                    <div className="rating-stars">★★★★★</div>
                                </div>
                                <div className="testimonial-horizontal-content">
                                    <p className="review-text">
                                        "Finally an app that connects me with real home cooks!
                                        Great variety of dishes and flexible payment options."
                                    </p>
                                    <div className="reviewer-info">
                                        <h4 className="reviewer-name">Emily Chen</h4>
                                        <p className="reviewer-location">Toronto, Canada</p>
                                    </div>
                                    <div className="verified-badge">
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>



                    {/* cuisines */}

                    <h3 className="cuisines-title title-animate" id="cuisines-title">
                        {"Most Famous Cusines".split("").map((char, index) => (
                            <span
                                key={index}
                                style={{ transitionDelay: `${index * 35}ms` }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h3>

                    <div className="cuisines-grid">
                        <div className="cuisine-item">
                            <img src={Italian} alt="Italian" />
                            <span>Italian</span>
                        </div>
                        <div className="cuisine-item">
                            <img src={Syrian} alt="Syrian" />
                            <span>Syrian</span>
                        </div>
                        <div className="cuisine-item">
                            <img src={Japanese} alt="Japanese" />
                            <span>Japanese</span>
                        </div>
                        <div className="cuisine-item">
                            <img src={Turkish} alt="Turkish" />
                            <span>Turkish</span>
                        </div>
                        <div className="cuisine-item">
                            <img src={Chinese} alt="Chinese" />
                            <span>Chinese</span>
                        </div>
                    </div>

                    <div className="discover-more">
                        <a href="#" className="discover-link">Discover more →</a>
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
            </main>
        </div>
    );
}
export default HomePage;