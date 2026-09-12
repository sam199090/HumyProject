// components/JapaneseKitchen.jsx
import React, { useState } from 'react';
import './JapaneseKitchen.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

import Icecream from '../assets/images/Icecream.jpg';
import Tchicken from '../assets/images/Tchicken.jpg';
import Tempura from '../assets/images/Tempura.jpg';
import Sushi from '../assets/images/Sushi.jpg';
import Ramen from '../assets/images/Ramen.jpg';
import { useCart } from './CartContext';




const dishes = [
    {
        id: 1,
        name: 'Sushi Set',
        description: 'Fresh nigiri sushi with salmon, tuna, and shrimp, served with wasabi and ginger',
        price: 220,
        image: Sushi,
        extras: ['Extra Wasabi', 'Extra Ginger', 'Extra Soy Sauce', 'Extra Avocado']
    },
    {
        id: 2,
        name: 'Ramen',
        description: 'Rich pork broth ramen with chashu, soft-boiled egg, nori, and green onions',
        price: 195,
        image: Ramen,
        extras: ['Extra Egg', 'Extra Nori', 'Extra Chashu', 'Extra Chili Oil']
    },
    {
        id: 3,
        name: 'Tempura',
        description: 'Light and crispy battered shrimp and vegetables served with tentsuyu dipping sauce',
        price: 185,
        image: Tempura,
        extras: ['Extra Shrimp', 'Extra Vegetables', 'Extra Sauce', 'Extra Salt']
    },
    {
        id: 4,
        name: 'Teriyaki Chicken',
        description: 'Grilled chicken glazed with sweet teriyaki sauce, served with steamed rice and vegetables',
        price: 175,
        image: Tchicken,
        extras: ['Extra Teriyaki Sauce', 'Extra Rice', 'Extra Vegetables', 'Extra Sesame Seeds']
    },
    {
        id: 5,
        name: 'Mochi Ice Cream',
        description: 'Sweet rice dough filled with ice cream, available in matcha, strawberry, and vanilla flavors',
        price: 145,
        image: Icecream,
        extras: ['Extra Matcha', 'Extra Strawberry', 'Extra Vanilla', 'Extra Chocolate']
    }
];

function JapaneseKitchen() {
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
                kitchen: 'Japanese'
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
        <div className="japanese-kitchen-page">
            <div className="japanese-kitchen-container">
                <div className="japanese-kitchen-header">
                    <Link to="/kitchens" className="back-arrow-japanese">
                        ←
                    </Link>
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="logojapanese" />
                    </Link>
                    <h1 className="japanese-kitchen-title">Japanese Kitchen</h1>
                </div>

                <div className="japanese-dishes-grid">
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
                <div className="popup-overlay-japanese" onClick={handleClosePopup}>
                    <div className="popup-container-japanese" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close-japanese" onClick={handleClosePopup}>×</button>

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

export default JapaneseKitchen;