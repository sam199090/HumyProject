// pages/Login.jsx
import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import API from '../components/services/api';

function Login() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // التحقق من وجود المستخدم
    const checkUserExists = async (email) => {
        try {
            const response = await API.get(`/users/check/${email}`);
            return response.data.exists;
        } catch (error) {
            console.error('Check user error:', error);
            return false;
        }
    };

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

        setError('');
        setLoading(true);

        try {
            const exists = await checkUserExists(email);
            
            if (exists) {
                setLoading(false);
                // التوجيه إلى صفحة EmailAndPassword مع تمرير الإيميل
                navigate('/email-password', { state: { email: email } });
            } else {
                setLoading(false);
                navigate('/new-user');
            }
        } catch (error) {
            setLoading(false);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">

                <div className="logo-section2">
                    <img src={Logo} alt="Logo" className="login-logo" />
                    <button 
                        onClick={handleForwardClick} 
                        className="forward-arrow"
                        disabled={loading}
                    >
                        {loading ? '...' : '→'}
                    </button>
                </div>

                <Link to="/order" className="back-arrow">
                    ← 
                </Link>
                
                <h1 className="login-title">LOG IN / SIGN UP</h1>
                <h2 className="login-subtitle">Fill in your email address</h2>
                
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">
                            E-postadress
                            <span className="required">*</span>
                        </label>
                        <input 
                            type="email" 
                            className="form-input"
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

                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
}

export default Login;