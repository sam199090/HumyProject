// components/ChineseKitchen.jsx
import React, { useState } from 'react';
import './ChineseKitchen.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import Dimsum from '../assets/images/Dimsum.jpg';
import Springrolls from '../assets/images/Springrolls.jpg';
import Friedrice from '../assets/images/Friedrice.jpg';
import Pekingduck from '../assets/images/Pekingduck.jpg';
import Kungpao from '../assets/images/Kungpao.jpg';
import { useCart } from './CartContext';


const dishes = [
    {
        id: 1,
        name: 'Kung Pao Chicken',
        description: 'Spicy stir-fried chicken with peanuts, vegetables, and chili peppers in a savory sauce',
        price: 185,
        image: Kungpao,
        extras: ['Extra Peanuts', 'Extra Chili', 'Extra Vegetables', 'Extra Rice']
    },
    {
        id: 2,
        name: 'Dim Sum Platter',
        description: 'Assorted steamed dumplings including shrimp, pork, and vegetable varieties',
        price: 195,
        image: Dimsum,
        extras: ['Extra Shrimp Dumplings', 'Extra Pork Dumplings', 'Extra Vegetable Dumplings', 'Extra Dipping Sauce']
    },
    {
        id: 3,
        name: 'Peking Duck',
        description: 'Crispy roasted duck served with pancakes, hoisin sauce, and fresh vegetables',
        price: 245,
        image: Pekingduck,
        extras: ['Extra Pancakes', 'Extra Hoisin Sauce', 'Extra Cucumber', 'Extra Spring Onions']
    },
    {
        id: 4,
        name: 'Fried Rice',
        description: 'Wok-fried rice with egg, vegetables, and your choice of chicken, shrimp, or pork',
        price: 165,
        image: Friedrice,
        extras: ['Extra Chicken', 'Extra Shrimp', 'Extra Vegetables', 'Extra Egg']
    },
    {
        id: 5,
        name: 'Spring Rolls',
        description: 'Crispy fried rolls filled with vegetables and glass noodles, served with sweet chili sauce',
        price: 145,
        image: Springrolls,
        extras: ['Extra Sweet Chili Sauce', 'Extra Vegetables', 'Extra Glass Noodles', 'Extra Sesame Seeds']
    }
];

function ChineseKitchen() {
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
                kitchen: 'Chinese'
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
        <div className="chinese-kitchen-page">
            <div className="chinese-kitchen-container">
                <div className="chinese-kitchen-header">
                    <Link to="/kitchens" className="back-arrow-chinese">
                        ←
                    </Link>
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="logochinese" />
                    </Link>
                    <h1 className="chinese-kitchen-title">Chinese Kitchen</h1>
                </div>

                <div className="chinese-dishes-grid">
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
                <div className="popup-overlay-chinese" onClick={handleClosePopup}>
                    <div className="popup-container-chinese" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close-chinese" onClick={handleClosePopup}>×</button>

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

export default ChineseKitchen;