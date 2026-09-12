// pages/NewUser.jsx
import React, { useState } from 'react';
import './NewUser.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { registerUser } from '../components/services/api';
import { useUser } from '../components/UserContext';

function NewUser() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [discountCode, setDiscountCode] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login } = useUser();

    const handleForwardClick = async (e) => {
        e.preventDefault();
        
        if (!email.trim()) {
            setError('Please enter your email address');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            setError('Please enter a valid email address');
            return;
        }
        if (!firstName.trim()) {
            setError('Please enter your first name');
            return;
        }
        if (!lastName.trim()) {
            setError('Please enter your last name');
            return;
        }
        if (!mobileNumber.trim()) {
            setError('Please enter your mobile number');
            return;
        }
        if (!dateOfBirth.trim()) {
            setError('Please enter your date of birth');
            return;
        }
        if (!password.trim()) {
            setError('Please enter your password');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (!termsAccepted) {
            setError('You must agree to the terms of use and privacy policy');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const userData = {
                email: email,
                firstName: firstName,
                lastName: lastName,
                mobileNumber: mobileNumber,
                dateOfBirth: dateOfBirth,
                discountCode: discountCode || null,
                password: password
            };

            console.log('Sending registration data:', userData);
            const response = await registerUser(userData);
            console.log('Registration success:', response);
            
            login(response);
            
            setLoading(false);
            setShowPopup(true);
        } catch (error) {
            setLoading(false);
            console.error('Registration error details:', error);
            
            if (error.response) {
                console.log('Response status:', error.response.status);
                console.log('Response data:', error.response.data);
                
                if (error.response.data && error.response.data.message) {
                    setError(error.response.data.message);
                } else if (error.response.data && error.response.data.errors) {
                    const errors = Object.values(error.response.data.errors).flat();
                    setError(errors.join(', '));
                } else {
                    setError(`Server error: ${error.response.status}`);
                }
            } else if (error.request) {
                setError('No response from server. Please check your connection.');
            } else {
                setError('Registration failed. Please try again.');
            }
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        navigate('/kitchens');
    };

    return (
        <div className="newuser-page">
            <div className="newuser-container">

                <div className="logo-section-newuser">
                    <img src={Logo} alt="Logo" className="newuser-logo" />
                    <button onClick={handleForwardClick} className="forward-arrow-newuser" disabled={loading}>
                        {loading ? '...' : '→'}
                    </button>
                </div>

                <Link to="/login" className="back-arrow-newuser">
                    ←
                </Link>

                <h1 className="newuser-title">NEW USER</h1>
                <h2 className="newuser-subtitle">Fill in your details</h2>

                <div className="form-row-newuser-email">
                    <div className="form-group-newuser-email">
                        <label className="form-label-newuser-email">
                            Email
                            <span className="required-newuser">*</span>
                        </label>
                        <input
                            type="email"
                            className="form-input-newuser-email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (error) setError('');
                            }}
                            required
                        />
                    </div>
                </div>

                <div className="form-row-newuser-name">
                    <div className="form-group-newuser-firstname">
                        <label className="form-label-newuser-firstname">
                            First name
                            <span className="required-newuser">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-input-newuser-firstname"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                if (error) setError('');
                            }}
                            required
                        />
                    </div>

                    <div className="form-group-newuser-lastname">
                        <label className="form-label-newuser-lastname">
                            Last name
                            <span className="required-newuser">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-input-newuser-lastname"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                                if (error) setError('');
                            }}
                            required
                        />
                    </div>
                </div>

                <div className="form-row-newuser-contact">
                    <div className="form-group-newuser-mobile">
                        <label className="form-label-newuser-mobile">
                            Mobile Number
                            <span className="required-newuser">*</span>
                        </label>
                        <input
                            type="tel"
                            className="form-input-newuser-mobile"
                            placeholder="Enter your mobile number"
                            value={mobileNumber}
                            onChange={(e) => {
                                setMobileNumber(e.target.value);
                                if (error) setError('');
                            }}
                            required
                        />
                    </div>

                    <div className="form-group-newuser-dob">
                        <label className="form-label-newuser-dob">
                            Date of birth
                            <span className="required-newuser">*</span>
                        </label>
                        <input
                            type="date"
                            className="form-input-newuser-dob"
                            value={dateOfBirth}
                            onChange={(e) => {
                                setDateOfBirth(e.target.value);
                                if (error) setError('');
                            }}
                            required
                        />
                    </div>
                </div>

                <div className="form-row-newuser-security">
                    <div className="form-group-newuser-discount">
                        <label className="form-label-newuser-discount">
                            Discount code
                        </label>
                        <input
                            type="text"
                            className="form-input-newuser-discount"
                            placeholder="Enter discount code (optional)"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                        />
                    </div>

                    <div className="form-group-newuser-password">
                        <label className="form-label-newuser-password">
                            Password
                            <span className="required-newuser">*</span>
                        </label>
                        <input
                            type="password"
                            className="form-input-newuser-password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (error) setError('');
                            }}
                            required
                        />
                    </div>
                </div>

                <div className="form-row-newuser-terms">
                    <div className="form-group-newuser-terms">
                        <label className="form-label-newuser-terms">
                            <input
                                type="checkbox"
                                className="form-input-newuser-terms"
                                checked={termsAccepted}
                                onChange={(e) => {
                                    setTermsAccepted(e.target.checked);
                                    if (error) setError('');
                                }}
                                required
                            />
                            I agree to the terms of use and privacy policy.
                            <span className="required-newuser">*</span>
                        </label>
                    </div>
                </div>

                {error && <div className="error-message-newuser">{error}</div>}
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-container">
                        <h2 className="popup-title">Thank you for creating an account.</h2>
                        <button onClick={handleClosePopup} className="popup-close-btn">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewUser;