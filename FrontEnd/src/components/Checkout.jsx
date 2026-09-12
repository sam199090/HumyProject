// components/Checkout.jsx
import React, { useEffect, useState } from 'react';
import './Checkout.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { useCart } from './CartContext';
import API from '../components/services/api';

function Checkout() {
    const { cartItems, clearCart } = useCart();
    const [localCart, setLocalCart] = useState([]);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [notes, setNotes] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // تحميل من localStorage مباشرة كحل احتياطي
    useEffect(() => {
        const saved = localStorage.getItem('cartItems');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setLocalCart(parsed);
                console.log('Checkout - loaded from localStorage:', parsed);
            } catch (e) {
                console.error('Error loading from localStorage:', e);
            }
        }
    }, []);

    // استخدام cartItems من Context أو localStorage كاحتياطي
    const displayItems = cartItems.length > 0 ? cartItems : localCart;

    console.log('Checkout - cartItems from context:', cartItems);
    console.log('Checkout - displayItems:', displayItems);

    const getTotalPrice = () => {
        return displayItems.reduce((total, item) => total + item.price, 0);
    };

    const handlePlaceOrder = async () => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');

        if (!user.email) {
            alert('Please login first!');
            navigate('/login');
            return;
        }

        if (!address.trim()) {
            alert('Please enter your delivery address');
            return;
        }

        if (!phone.trim()) {
            alert('Please enter your phone number');
            return;
        }

        setLoading(true);

        const orderData = {
            email: user.email,
            totalAmount: getTotalPrice(),
            deliveryAddress: address,
            phoneNumber: phone,
            deliveryNotes: notes,
            items: displayItems.map(item => ({
                dishId: item.dishId || item.id,
                name: item.name,
                image: item.image,
                extras: item.extras || [],
                price: item.price,
                quantity: item.quantity || 1,
                kitchen: item.kitchen
            }))
        };

        try {
            const response = await API.post('/orders', orderData);
            console.log('Order placed:', response.data);
            alert('Your order has been placed successfully!');
            clearCart();
            localStorage.removeItem('cartItems');
            setLoading(false);
            navigate('/my-orders');
        } catch (error) {
            setLoading(false);
            console.error('Order error:', error);
            if (error.response && error.response.data) {
                alert(error.response.data.message || 'Failed to place order. Please try again.');
            } else {
                alert('Failed to place order. Please try again.');
            }
        }
    };

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <div className="checkout-header">
                    <Link to="/kitchens" className="back-arrow-checkout">
                        ←
                    </Link>
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="logocheckout" />
                    </Link>
                    <h1 className="checkout-title">Checkout</h1>
                </div>

                <div className="checkout-content">
                    <div className="checkout-order-summary">
                        <h2>Order Summary</h2>
                        {displayItems.length === 0 ? (
                            <p className="checkout-empty">Your cart is empty</p>
                        ) : (
                            <>
                                <div className="checkout-items">
                                    {displayItems.map((item) => (
                                        <div key={item.id} className="checkout-item">
                                            <img src={item.image} alt={item.name} className="checkout-item-image" />
                                            <div className="checkout-item-details">
                                                <h4>{item.name}</h4>
                                                <p className="checkout-item-kitchen">{item.kitchen}</p>
                                                {item.extras && item.extras.length > 0 && (
                                                    <p className="checkout-item-extras">{item.extras.join(', ')}</p>
                                                )}
                                                <span className="checkout-item-price">{item.price} SEK</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="checkout-total">
                                    <span>Total:</span>
                                    <span className="checkout-total-price">{getTotalPrice()} SEK</span>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="checkout-delivery-info">
                        <h2>Delivery Information</h2>
                        <div className="checkout-form">
                            <div className="checkout-form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="checkout-input"
                                    defaultValue={JSON.parse(localStorage.getItem('user') || '{}')?.firstName + ' ' + JSON.parse(localStorage.getItem('user') || '{}')?.lastName || ''}
                                    readOnly
                                />
                            </div>
                            <div className="checkout-form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="Enter your delivery address"
                                    className="checkout-input"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="checkout-form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="checkout-input"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="checkout-form-group">
                                <label>Delivery Notes</label>
                                <textarea
                                    placeholder="Any special instructions?"
                                    className="checkout-textarea"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                ></textarea>
                            </div>
                            <button
                                className="checkout-place-order-btn"
                                onClick={handlePlaceOrder}
                                disabled={loading || displayItems.length === 0}
                            >
                                {loading ? 'Placing Order...' : 'Place Order'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;