// components/UserContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // تحميل بيانات المستخدم من localStorage عند بدء التشغيل
        const savedUser = localStorage.getItem('user');
        const savedLoginStatus = localStorage.getItem('isLoggedIn');
        
        if (savedUser && savedLoginStatus === 'true') {
            try {
                setUser(JSON.parse(savedUser));
                setIsLoggedIn(true);
            } catch (e) {
                console.error('Error loading user:', e);
                localStorage.removeItem('user');
                localStorage.removeItem('isLoggedIn');
            }
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', 'true');
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        // حذف السلة أيضاً
        localStorage.removeItem('cartItems');
    };

    return (
        <UserContext.Provider value={{
            user,
            isLoggedIn,
            loading,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    );
};