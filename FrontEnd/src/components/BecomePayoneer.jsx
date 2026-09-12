// src/components/BecomeDriver.jsx
import React, { useState } from 'react';
import './BecomePayoneer.css';
import logo from '../assets/images/Logo.png';
import Driver from '../assets/images/Driver.png';
import Pic6 from '../assets/images/Pic6.png';

function BecomePayoneer() {
    const handleMouseMove = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const circle = btn.querySelector('.circle');

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.style.width = '300px';
        circle.style.height = '300px';
    };

    const handleMouseLeave = (e) => {
        const circle = e.currentTarget.querySelector('.circle');
        circle.style.width = '0';
        circle.style.height = '0';
    };
    const [gender, setGender] = useState('');

    // driver-image
    const driverImage = logo;

    return (
        <div className="driver-page"style={{position:'relative', left:'200px'}}>
            <div className="driver-overlay"></div>
            <div className="driver-modal">
                <div className="driver-modal-content">
                    <div className="driver-left">
                        <img src={Pic6} alt="Become a Payoneer" className="driver-circle-image" />
                    </div>

                    <div className="driver-right">
                        <h2 className="driver-title" style={{ position: 'relative', top: '20px', fontSize: '28px' }}>Become a Payoneer</h2>
                    </div>
                </div>
                <br />
                <br />

                {/* Full Name , Gender */}
                <div className="driver-form-row">
                    <div className="driver-form-group">
                        <label style={{ marginRight: '220px' }}>Full Name</label>
                        <input type="text" placeholder="Write Here" className="driver-input" />
                    </div>
                    <div className="driver-form-group">
                        <label style={{ marginRight: '245px' }}>Gender</label>
                        <div className="driver-gender-group" style={{ position: 'relative', left: '15px' }}>
                            <label className="driver-gender-option">
                                <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
                                <span className="driver-gender-box">
                                    <span className="driver-gender-circle"></span>
                                    <span className="driver-gender-text">Male</span>
                                </span>
                            </label>
                            <label className="driver-gender-option" style={{ position: 'relative', right: '15px' }}>
                                <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
                                <span className="driver-gender-box">
                                    <span className="driver-gender-circle"></span>
                                    <span className="driver-gender-text">Female</span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Nationality */}

                <div className="driver-form-row">
                    <div className="driver-form-group">
                        <label style={{ marginRight: '230px' }}>Nationality</label>
                        <select className="driver-input" style={{
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23565656' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 12px center',
                            backgroundSize: '12px',
                            paddingRight: '35px',
                            cursor: 'pointer',
                            width: '100%'
                        }}>
                            <option value=""  >Choose Here</option>
                            <option value="Turkish">Turkish</option>
                            <option value="American">American</option>
                            <option value="British">British</option>
                            <option value="German">German</option>
                            <option value="French">French</option>
                            <option value="Italian">Italian</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Egyptian">Egyptian</option>
                            <option value="Saudi">Saudi</option>
                            <option value="Emirati">Emirati</option>
                            <option value="Jordanian">Jordanian</option>
                            <option value="Lebanese">Lebanese</option>
                            <option value="Kuwaiti">Kuwaiti</option>
                            <option value="Qatari">Qatari</option>
                            <option value="Bahraini">Bahraini</option>
                            <option value="Omani">Omani</option>
                        </select>
                    </div>

                    {/* Number */}


                    <div className="driver-form-group">
                        <label style={{ marginRight: '255px' }}>Number</label>
                        <div className="driver-phone-group">
                            <div className="driver-phone-wrapper">
                                <select className="driver-phone-code" style={{
                                    appearance: 'none',
                                    WebkitAppearance: 'none',
                                    MozAppearance: 'none',
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23565656' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 12px center',
                                    backgroundSize: '12px',
                                    paddingRight: '35px',
                                    cursor: 'pointer'
                                }}>
                                    <option value="+90">🇹🇷 +90</option>
                                    <option value="+1">🇺🇸 +1</option>
                                    <option value="+44">🇬🇧 +44</option>
                                    <option value="+49">🇩🇪 +49</option>
                                    <option value="+33">🇫🇷 +33</option>
                                    <option value="+39">🇮🇹 +39</option>
                                    <option value="+34">🇪🇸 +34</option>
                                    <option value="+20">🇪🇬 +20</option>
                                    <option value="+966">🇸🇦 +966</option>
                                    <option value="+971">🇦🇪 +971</option>
                                    <option value="+962">🇯🇴 +962</option>
                                    <option value="+961">🇱🇧 +961</option>
                                    <option value="+965">🇰🇼 +965</option>
                                    <option value="+974">🇶🇦 +974</option>
                                    <option value="+973">🇧🇭 +973</option>
                                    <option value="+968">🇴🇲 +968</option>
                                </select>
                                <input type="tel" placeholder="555 123 4567" className="driver-phone-input" />
                            </div>
                        </div>
                    </div>
                </div>


                {/*  Vehicle Type , Country */}


                <div className="driver-form-row">
                    <div className="driver-form-group">
                        <label style={{ marginRight: '170px' }}>Kitchens you serve</label>
                        <select className="driver-input" style={{
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23565656' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 12px center',
                            backgroundSize: '12px',
                            paddingRight: '35px',
                            cursor: 'pointer',
                            width: '100%'
                        }}>
                            <option value="">Choose Here</option>
                            <option value="Italian">Italian</option>
                            <option value="Syrian">Syrian</option>
                            <option value="Turkish">Turkish</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Indian">Indian</option>
                            <option value="Lebanese">Lebanese</option>
                            <option value="Egyptian">Egyptian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="American">American</option>
                            <option value="Thai">Thai</option>
                            <option value="Moroccan">Moroccan</option>
                            <option value="Multiple Cuisines">Multiple Cuisines</option>
                        </select>
                    </div>

                    <div className="driver-form-group">
                        <label style={{ marginRight: '255px' }}>Country</label>
                        <select className="driver-input" style={{
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23565656' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 12px center',
                            backgroundSize: '12px',
                            paddingRight: '35px',
                            cursor: 'pointer',
                            width: '100%'
                        }}>
                            <option value="">Choose Here</option>
                            <option value="Turkey">Turkey</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                            <option value="Italy">Italy</option>
                            <option value="Spain">Spain</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="UAE">UAE</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Oman">Oman</option>
                        </select>
                    </div>
                </div>


                {/* fourth row City ,Delivery Zone */}


                <div className="driver-form-row">

                    <div className="driver-form-group">
                        <label style={{ marginRight: '275px' }}>City</label>
                        <select className="driver-input" style={{
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23565656' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 12px center',
                            backgroundSize: '12px',
                            paddingRight: '35px',
                            cursor: 'pointer',
                            width: '100%'
                        }}>
                            <option value="">Choose Here</option>
                            <option value="Istanbul">Istanbul</option>
                            <option value="Ankara">Ankara</option>
                            <option value="Izmir">Izmir</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Abu Dhabi">Abu Dhabi</option>
                            <option value="Riyadh">Riyadh</option>
                            <option value="Jeddah">Jeddah</option>
                            <option value="Cairo">Cairo</option>
                            <option value="Alexandria">Alexandria</option>
                            <option value="Amman">Amman</option>
                            <option value="Beirut">Beirut</option>
                            <option value="Kuwait City">Kuwait City</option>
                            <option value="Doha">Doha</option>
                            <option value="Muscat">Muscat</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="driver-form-group">
                        <label style={{ marginRight: '280px' }}>Zone</label>
                        <select className="driver-input" style={{
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23565656' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 12px center',
                            backgroundSize: '12px',
                            paddingRight: '35px',
                            cursor: 'pointer',
                            width: '100%'
                        }}>
                            <option value="">Choose Here</option>
                            <option value="City Center">City Center</option>
                            <option value="North District">North District</option>
                            <option value="South District">South District</option>
                            <option value="East District">East District</option>
                            <option value="West District">West District</option>
                            <option value="Suburbs">Suburbs</option>
                            <option value="Downtown">Downtown</option>
                            <option value="Airport Area">Airport Area</option>
                            <option value="Industrial Area">Industrial Area</option>
                            <option value="University Area">University Area</option>
                            <option value="All Zones">All Zones</option>
                        </select>
                    </div>
                </div>
                {/*  Fifth   Note */}
                <div className="driver-form-row">
                    <div className="driver-form-group full-width">
                        <label style={{ marginRight: '620px' }}>Note</label>
                        <textarea
                            placeholder="Write your notes here..."
                            className="driver-textarea"
                            rows="4"
                        ></textarea>
                    </div>
                </div>

                {/* Contact Us */}
                <div className="driver-form-row">
                    <div className="driver-form-group full-width" style={{ textAlign: 'center' }}>
                        <button
                            className="driver-contact-btn download-btn-custom"
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
            </div>
        </div>
    );
}

export default BecomePayoneer;