// src/components/BlogPage.jsx
import React from 'react';
import './BlogPage.css';
import logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import Tajine from '../assets/images/Tajine.png';
import Fruits from '../assets/images/Fruits.png';
import womanCooking from '../assets/images/woman-cooking.png';
import FooterLogoImg from '../assets/images/FooterLogoImg.png';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AppGoogleW from '../assets/images/AppGoogleW.png';


function BlogPage() {

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
        <div className="blog-page">
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

                        <Link to="/kitchens" className="btn-animate-chars is-navlink">
                            <span className="navbar-link_text">
                                <span style={{ transitionDelay: '0s' }}>K</span>
                                <span style={{ transitionDelay: '0.01s' }}>i</span>
                                <span style={{ transitionDelay: '0.02s' }}>t</span>
                                <span style={{ transitionDelay: '0.03s' }}>c</span>
                                <span style={{ transitionDelay: '0.04s' }}>h</span>
                                <span style={{ transitionDelay: '0.05s' }}>e</span>
                                <span style={{ transitionDelay: '0.06s' }}>n</span>
                                <span style={{ transitionDelay: '0.07s' }}>s</span>
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
                    </nav>
                </div>
            </header>

            {/* Blog Section */}
            <section className="blog-page-section">
                <h2 className="blog-pages-title">
                    <span className="blog-page-text">Blog </span><br />

                </h2>
            </section>

            {/* Recent Blog Section */}
            <section className="recent-blog-section">
                <h2 className="recent-blog-title">Recent Blog</h2>

                <div className="blog-posts-grid" >

                    {/*  (Row 1)   */}
                    <div className="blog-row">
                        <div className="blog-card">
                            <img src={Tajine} alt="Tajine" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF', }}>Food</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>First Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '80px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp;&nbsp; adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More →</a>
                            </div>
                        </div>
                        <div className="blog-card">
                            <img src={Fruits} alt="Fruits" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF' }}>Health</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>Second Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '110px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp; adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More →</a>
                            </div>
                        </div>
                        <div className="blog-card">
                            <img src={womanCooking} alt="Woman Cooking" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF' }}>Cooking</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>Third Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '85px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp;&nbsp;adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More →</a>
                            </div>
                        </div>
                    </div>

                    {/*  (Row 2)   */}
                    <div className="blog-row">
                        <div className="blog-card">
                            <img src={Tajine} alt="Tajine" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF' }}>Food</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>First Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '80px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp;&nbsp;adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More →</a>
                            </div>
                        </div>
                        <div className="blog-card">
                            <img src={Fruits} alt="Fruits" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF' }}>Health</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>Second Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '110px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp;&nbsp;adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More →</a>
                            </div>
                        </div>
                        <div className="blog-card">
                            <img src={womanCooking} alt="Woman Cooking" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF' }}>Cooking</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>Third Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '85px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp;&nbsp;adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More →</a>
                            </div>
                        </div>
                    </div>

                    {/*  (Row 3)  */}
                    <div className="blog-row">
                        <div className="blog-card">
                            <img src={Tajine} alt="Tajine" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF' }}>Food</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>First Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '80px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp;&nbsp;adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More →</a>
                            </div>
                        </div>
                        <div className="blog-card">
                            <img src={Fruits} alt="Fruits" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF' }}>Health</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>Second Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '110px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp;&nbsp;adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More→</a>
                            </div>
                        </div>
                        <div className="blog-card">
                            <img src={womanCooking} alt="Woman Cooking" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF' }}>Cooking</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>Third Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '85px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp;&nbsp;adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More →</a>
                            </div>
                        </div>
                    </div>

                    {/*  (Row 4)  */}

                    <div className="blog-row">
                        <div className="blog-card">
                            <img src={Tajine} alt="Tajine" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF' }}>Food</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>First Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '80px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp;&nbsp;adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More →</a>
                            </div>
                        </div>
                        <div className="blog-card">
                            <img src={Fruits} alt="Fruits" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF' }}>Health</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>Second Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '110px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp;&nbsp;adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More →</a>
                            </div>
                        </div>
                        <div className="blog-card">
                            <img src={womanCooking} alt="Woman Cooking" className="blog-image" />
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="blog-category" style={{ backgroundColor: '#E2E2E2', color: '#BFBFBF' }}>Cooking</span>
                                    <span className="blog-read-time">5 min read</span>
                                </div>
                                <h3 className="blog-post-title" style={{ color: '#F2BB13' }}>Third Blog</h3>
                                <p className="blog-excerpt" style={{ color: '#BFBFBF', marginRight: '85px' }}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    &nbsp;&nbsp;&nbsp;adipiscing elitadipiscing elit adipiscingelit.
                                </p>
                                <a href="#" className="blog-read-more" style={{ color: '#429F3D' }}>Read More →</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Numbers Section */}


            <section className="numbers-section" style={{ width: '450px', marginLeft: '375px', }}>
                <div className="numbers-container">
                    <span className="number">1</span>
                    <span className="number">2</span>
                    <span className="number">3</span>
                    <span className="number">4</span>
                    <span className="number">5</span>
                    <span className="number">6</span>
                    <span className="number">7</span>
                    <span className="number">8</span>
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

export default BlogPage;