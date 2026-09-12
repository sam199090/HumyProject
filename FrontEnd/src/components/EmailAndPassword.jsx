// pages/EmailAndPassword.jsx
import React, { useState } from 'react';
import './EmailAndPassword.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import API from '../components/services/api';
import { useUser } from '../components/UserContext';

function EmailAndPassword() {
    const location = useLocation();
    const emailFromState = location.state?.email || '';
    
    const [email, setEmail] = useState(emailFromState);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useUser();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if (!email.trim()) {
            setError('Please enter your email address');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            setError('Please enter a valid email address');
            return;
        }
        if (!password.trim()) {
            setError('Please enter your password');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const response = await API.post('/users/login', {
                email: email,
                password: password
            });

            console.log('Login successful:', response.data);
            
            login(response.data);
            
            setLoading(false);
            navigate('/kitchens');
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'Invalid email or password');
            } else {
                setError('Login failed. Please try again.');
            }
            console.error('Login error:', error);
        }
    };

    return (
        <div className="email-password-page">
            <div className="email-password-container">

                <div className="logo-section-email">
                    <img src={Logo} alt="Logo" className="email-logo" />
                    <button 
                        onClick={handleLogin} 
                        className="forward-arrow-email"
                        disabled={loading}
                    >
                        {loading ? '...' : '→'}
                    </button>
                </div>

                <Link to="/login" className="back-arrow-email">
                    ← 
                </Link>
                
                <h1 className="email-title">LOG IN</h1>
                <h2 className="email-subtitle">Enter your credentials</h2>
                
                <form onSubmit={handleLogin} className="email-form">
                    <div className="form-row-email">
                        <div className="form-group-email">
                            <label className="form-label-email">
                                E-postadress
                                <span className="required-email">*</span>
                            </label>
                            <input 
                                type="email" 
                                className="form-input-email"
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

                    <div className="form-row-email">
                        <div className="form-group-email">
                            <label className="form-label-email">
                                Password
                                <span className="required-email">*</span>
                            </label>
                            <input 
                                type="password" 
                                className="form-input-email"
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

                    <div className="email-links">
                        <Link to="/forget-password" className="forgot-password-link-email">
                            Forgot your password?
                        </Link>
                    </div>

                    <button type="submit" className="email-submit-btn" disabled={loading}>
                        {loading ? 'Logging in...' : 'Log In'}
                    </button>
                </form>

                {error && <div className="error-message-email">{error}</div>}
            </div>
        </div>
    );
}

export default EmailAndPassword;