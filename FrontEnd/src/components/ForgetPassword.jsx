// pages/ForgetPassword.jsx
import React, { useState } from 'react';
import './ForgetPassword.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import API from '../components/services/api';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [step, setStep] = useState(1);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCheckEmail = async (e) => {
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
            const response = await API.get(`/users/check/${email}`);
            
            if (response.data.exists) {
                setStep(2);
                setLoading(false);
                setSuccess('Email verified. Please enter your new password.');
            } else {
                setError('No account found with this email address');
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            setError('Something went wrong. Please try again.');
            console.error('Check email error:', error);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        
        if (!newPassword.trim()) {
            setError('Please enter your new password');
            return;
        }
        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const response = await API.post('/users/reset-password', {
                email: email,
                newPassword: newPassword
            });

            console.log('Reset password response:', response.data);
            
            setLoading(false);
            setSuccess('Password reset successfully!');
            setError('');
            
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setLoading(false);
            console.error('Reset password error:', error);
            console.error('Error response:', error.response);
            
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'Failed to reset password');
            } else {
                setError('Failed to reset password. Please try again.');
            }
        }
    };

    return (
        <div className="forget-password-page">
            <div className="forget-password-container">

                <div className="logo-section-forget">
                    <img src={Logo} alt="Logo" className="forget-logo" />
                </div>

                <Link to="/login" className="back-arrow-forget">
                    ←
                </Link>

                <h1 className="forget-title">Forgot Password</h1>
                <h2 className="forget-subtitle">
                    {step === 1 ? 'Enter your email to reset password' : 'Create a new password'}
                </h2>

                {step === 1 ? (
                    <form onSubmit={handleCheckEmail} className="forget-form">
                        <div className="form-row-forget">
                            <div className="form-group-forget">
                                <label className="form-label-forget">
                                    Email Address
                                    <span className="required-forget">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-input-forget"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (error) setError('');
                                        if (success) setSuccess('');
                                    }}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="forget-submit-btn" disabled={loading}>
                            {loading ? 'Checking...' : 'Verify Email'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleResetPassword} className="forget-form">
                        <div className="form-row-forget">
                            <div className="form-group-forget">
                                <label className="form-label-forget">
                                    New Password
                                    <span className="required-forget">*</span>
                                </label>
                                <input
                                    type="password"
                                    className="form-input-forget"
                                    placeholder="Enter new password (min 6 characters)"
                                    value={newPassword}
                                    onChange={(e) => {
                                        setNewPassword(e.target.value);
                                        if (error) setError('');
                                        if (success) setSuccess('');
                                    }}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row-forget">
                            <div className="form-group-forget">
                                <label className="form-label-forget">
                                    Confirm Password
                                    <span className="required-forget">*</span>
                                </label>
                                <input
                                    type="password"
                                    className="form-input-forget"
                                    placeholder="Confirm new password"
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        if (error) setError('');
                                        if (success) setSuccess('');
                                    }}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="forget-submit-btn" disabled={loading}>
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </form>
                )}

                {error && <div className="error-message-forget">{error}</div>}
                {success && <div className="success-message-forget">{success}</div>}

                <div className="forget-links">
                    <Link to="/login" className="forget-login-link">
                        ← Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;