// pages/MyOrders.jsx
import React, { useState, useEffect } from 'react';
import './MyOrders.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import API from './services/api'; 

function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (!user.email) {
            setError('Please login to view your orders');
            setLoading(false);
            return;
        }

        API.get(`/orders/user/${user.email}`)
            .then(response => {
                setOrders(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
                setError('Failed to load orders');
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loading">Loading orders...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="my-orders-page">
            <div className="my-orders-container">
                <div className="my-orders-header">
                    <Link to="/order" className="back-arrow-orders">
                        ←
                    </Link>
                    <Link to="/">
    <img src={Logo} alt="Logo" className="logo-img" style={{ cursor: 'pointer' }} />
</Link>
                    <h1 className="my-orders-title">My Orders</h1>
                </div>
                {orders.length === 0 ? (
                    <div className="no-orders">
                        <p>You have no orders yet.</p>
                        <Link to="/kitchens" className="order-now-btn">Order Now</Link>
                    </div>
                ) : (
                    <div className="orders-list">
                        {orders.map((order) => (
                            <div key={order.orderId} className="order-card">
                                <div className="order-header">
                                    <span className="order-id">Order #{order.orderId}</span>
                                    <span className={`order-status status-${order.status.toLowerCase()}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <div className="order-date">
                                    {new Date(order.orderDate).toLocaleDateString()} at {' '}
                                    {new Date(order.orderDate).toLocaleTimeString()}
                                </div>
                                <div className="order-items">
                                    {order.items.map((item, index) => (
                                        <div key={index} className="order-item">
                                            <span>{item.dishName}</span>
                                            <span>{item.price} SEK</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="order-total">
                                    <span>Total:</span>
                                    <span>{order.totalAmount} SEK</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyOrders;