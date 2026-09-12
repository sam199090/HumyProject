// components/TurkishKitchen.jsx
import React, { useState } from 'react';
import './TurkishKitchen.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import Pide from '../assets/images/Pide.jpg';
import Tdelight from '../assets/images/Tdelight.jpg';
import Tbaklawa from '../assets/images/Tbaklawa.jpg';
import Kebab from '../assets/images/Kebab.jpg';
import Mezze from '../assets/images/Mezze.jpg';
import { useCart } from './CartContext';



const dishes = [
    {
        id: 1,
        name: 'Kebab',
        description: 'Grilled marinated meat skewers served with rice, grilled vegetables, and Turkish bread',
        price: 195,
        image: Kebab,
        extras: ['Extra Rice', 'Extra Bread', 'Extra Sauce', 'Extra Grilled Vegetables']
    },
    {
        id: 2,
        name: 'Baklava',
        description: 'Sweet pastry made with layers of filo, pistachios, and honey syrup, Turkish style',
        price: 135,
        image: Tbaklawa,
        extras: ['Extra Pistachios', 'Extra Honey', 'Extra Cream', 'Extra Walnuts']
    },
    {
        id: 3,
        name: 'Pide',
        description: 'Turkish flatbread pizza topped with ground meat, cheese, and vegetables, baked in stone oven',
        price: 165,
        image: Pide,
        extras: ['Extra Cheese', 'Extra Meat', 'Extra Vegetables', 'Extra Garlic Sauce']
    },
    {
        id: 4,
        name: 'Meze Platter',
        description: 'Selection of traditional Turkish appetizers including hummus, baba ghanoush, dolma, and tzatziki',
        price: 175,
        image: Mezze,
        extras: ['Extra Hummus', 'Extra Bread', 'Extra Olives', 'Extra Feta Cheese']
    },
    {
        id: 5,
        name: 'Turkish Delight',
        description: 'Traditional Turkish delight with rose, pistachio, and pomegranate flavors, served with Turkish tea',
        price: 125,
        image: Tdelight,
        extras: ['Extra Rose Flavor', 'Extra Pistachio', 'Extra Pomegranate', 'Extra Turkish Tea']
    }
];

function TurkishKitchen() {
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
                kitchen: 'Turkish'
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
        <div className="turkish-kitchen-page">
            <div className="turkish-kitchen-container">
                <div className="turkish-kitchen-header">
                    <Link to="/kitchens" className="back-arrow-turkish">
                        ←
                    </Link>
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="logoturkish" />
                    </Link>
                    <h1 className="turkish-kitchen-title">Turkish Kitchen</h1>
                </div>

                <div className="turkish-dishes-grid">
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
                <div className="popup-overlay-turkish" onClick={handleClosePopup}>
                    <div className="popup-container-turkish" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close-turkish" onClick={handleClosePopup}>×</button>

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

export default TurkishKitchen;