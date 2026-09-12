// components/SyrianKitchen.jsx
import React, { useState } from 'react';
import './SyrianKitchen.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import kibbehImage from '../assets/images/kibbeh.jpg';
import Baklawa from '../assets/images/Baklawa.jpg';
import Muhammara from '../assets/images/Muhammara.jpg';
import Shawerma from '../assets/images/Shawerma.jpg';

import { useCart } from './CartContext';


const dishes = [
    {
        id: 1,
        name: 'Kibbeh',
        description: 'Traditional Syrian kibbeh made with bulgur wheat, minced meat, onions, and aromatic spices',
        price: 175,
        image: kibbehImage,
        extras: ['Extra Garlic Sauce', 'Extra Yogurt', 'Extra Pickles', 'Extra Hot Sauce']
    },
    {
        id: 2,
        name: 'Fattoush Salad',
        description: 'Fresh Syrian salad with crispy pita bread, mixed vegetables, and tangy sumac dressing',
        price: 145,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop',
        extras: ['Extra Pita Chips', 'Extra Feta Cheese', 'Extra Olives', 'Extra Lemon Dressing']
    },
    {
        id: 3,
        name: 'Shawarma',
        description: 'Marinated chicken or beef wrapped in pita bread with garlic sauce, pickles, and vegetables',
        price: 165,
        image: Shawerma,
        extras: ['Extra Garlic Sauce', 'Extra Chili Sauce', 'Extra Pickles', 'Extra Fries']
    },
    {
        id: 4,
        name: 'Muhammara',
        description: 'Smoky roasted red pepper and walnut dip with pomegranate molasses and spices',
        price: 135,
        image: Muhammara,
        extras: ['Extra Walnuts', 'Extra Pita Bread', 'Extra Olive Oil', 'Extra Pomegranate Molasses']
    },
    {
        id: 5,
        name: 'Baklawa',
        description: 'Sweet pastry made with layers of filo, nuts, and honey syrup, Syrian style',
        price: 125,
        image: Baklawa,
        extras: ['Extra Pistachios', 'Extra Honey', 'Extra Cream', 'Extra Walnuts']
    }
];

function SyrianKitchen() {
    const [selectedDish, setSelectedDish] = useState(null);
    const [selectedExtras, setSelectedExtras] = useState([]);
    const { cartItems, addToCart, removeFromCart, getTotalPrice, isCartOpen, toggleCart, handleCheckout } = useCart();

    const handleDishClick = (dish) => {
        setSelectedDish(dish);
        setSelectedExtras([]);
    };

    const handleExtraToggle = (extra) => {
        setSelectedExtras(prev =>
            prev.includes(extra)
                ? prev.filter(e => e !== extra)
                : [...prev, extra]
        );
    };

    const handleAddToCart = () => {
        if (selectedDish) {
            const total = selectedDish.price + (selectedExtras.length * 10);
            const newItem = {
                id: Date.now(),
                dishId: selectedDish.id,
                name: selectedDish.name,
                image: selectedDish.image,
                extras: [...selectedExtras],
                price: total,
                quantity: 1,
                kitchen: 'Syrian'
            };
            addToCart(newItem);
            handleClosePopup();
        }
    };

    const handleClosePopup = () => {
        setSelectedDish(null);
        setSelectedExtras([]);
    };

    return (
        <div className="syrian-kitchen-page">
            <div className="syrian-kitchen-container">
                <div className="syrian-kitchen-header">
                    <Link to="/kitchens" className="back-arrow-syrian">
                        ←
                    </Link>
                    
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="logosyrian" />
                    </Link>
                    <h1 className="syrian-kitchen-title">Syrian Kitchen</h1>
                </div>

                <div className="syrian-dishes-grid">
                    {dishes.map((dish) => (
                        <div key={dish.id} className="dish-card" onClick={() => handleDishClick(dish)}>
                            <div className="dish-image-wrapper">
                                <img src={dish.image} alt={dish.name} className="dish-image" />
                            </div>
                            <div className="dish-info">
                                <h3 className="dish-name">{dish.name}</h3>
                                <p className="dish-description">{dish.description}</p>
                                <span className="dish-price">{dish.price} SEK</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAB Button */}
            <div className="fab-container">
                <button className="fab-button" onClick={toggleCart}>
                    <span className="fab-icon">🛒</span>
                    {cartItems.length > 0 && (
                        <span className="fab-badge">{cartItems.length}</span>
                    )}
                </button>
            </div>

            {/* Mini Cart - Side Panel */}
            <div className={`cart-side-panel ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-panel-header">
                    <h2>Your Cart</h2>
                    <button className="cart-close-btn" onClick={toggleCart}>×</button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <span className="cart-empty-icon">🛒</span>
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items-list">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <h4>{item.name}</h4>
                                        <p className="cart-item-kitchen">{item.kitchen}</p>
                                        {item.extras.length > 0 && (
                                            <p className="cart-item-extras">{item.extras.join(', ')}</p>
                                        )}
                                        <span className="cart-item-price">{item.price} SEK</span>
                                    </div>
                                    <button
                                        className="cart-item-remove"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-total">
                            <span>Total:</span>
                            <span className="cart-total-price">{getTotalPrice()} SEK</span>
                        </div>
                        <button className="cart-checkout-btn" onClick={handleCheckout}>
                            Checkout
                        </button>
                    </>
                )}
            </div>

            {/* Overlay for cart */}
            {isCartOpen && (
                <div className="cart-overlay" onClick={toggleCart}></div>
            )}

            {/* Popup for dish details */}
            {selectedDish && (
                <div className="popup-overlay-syrian" onClick={handleClosePopup}>
                    <div className="popup-container-syrian" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close-syrian" onClick={handleClosePopup}>×</button>

                        <div className="popup-dish-image-wrapper">
                            <img src={selectedDish.image} alt={selectedDish.name} className="popup-dish-image" />
                        </div>

                        <h2 className="popup-dish-name">{selectedDish.name}</h2>
                        <p className="popup-dish-description">{selectedDish.description}</p>
                        <p className="popup-dish-price">{selectedDish.price} SEK</p>

                        <div className="popup-extras-section">
                            <h3 className="popup-extras-title">Add Extras</h3>
                            <div className="popup-extras-grid">
                                {selectedDish.extras.map((extra, index) => (
                                    <div key={index} className="popup-extra-item">
                                        <label className="popup-extra-label">
                                            <input
                                                type="checkbox"
                                                className="popup-extra-checkbox"
                                                checked={selectedExtras.includes(extra)}
                                                onChange={() => handleExtraToggle(extra)}
                                            />
                                            <span className="popup-extra-name">{extra}</span>
                                            <span className="popup-extra-price">+10 SEK</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="popup-total-section">
                            <span className="popup-total-text">Total:</span>
                            <span className="popup-total-price">
                                {selectedDish.price + (selectedExtras.length * 10)} SEK
                            </span>
                        </div>

                        <button className="popup-add-button" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SyrianKitchen;