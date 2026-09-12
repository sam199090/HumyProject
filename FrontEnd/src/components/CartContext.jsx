// components/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    // تحميل البيانات مباشرة عند التهيئة
    const getInitialCart = () => {
        const saved = localStorage.getItem('cartItems');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                console.log('CartProvider - Initial load from localStorage:', parsed);
                return parsed;
            } catch (e) {
                console.error('Error loading from localStorage:', e);
                return [];
            }
        }
        return [];
    };

    const [cartItems, setCartItems] = useState(getInitialCart);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // حفظ البيانات في localStorage عند التغيير
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log('CartProvider - Saved to localStorage:', cartItems);
    }, [cartItems]);

    const addToCart = (item) => {
        console.log('Adding to cart:', item);
        setCartItems(prev => {
            const newCart = [...prev, item];
            console.log('New cart items:', newCart);
            return newCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    const handleCheckout = () => {
        setIsCartOpen(false);
        window.location.href = '/checkout';
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            isCartOpen,
            addToCart,
            removeFromCart,
            getTotalPrice,
            toggleCart,
            clearCart,
            handleCheckout
        }}>
            {children}
        </CartContext.Provider>
    );
};