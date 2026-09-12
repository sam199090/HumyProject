// components/ItalianKitchen.jsx
import React, { useState } from 'react';
import './ItalianKitchen.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import Ravioli from '../assets/images/Ravioli.jpg';
import { useCart } from './CartContext';

const dishes = [
    {
        id: 1,
        name: 'Pizza Napoletana',
        description: 'Traditional Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil',
        price: 189,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop',
        extras: ['Extra Cheese', 'Extra Jalapeños', 'Extra Mushrooms', 'Extra Olives']
    },
    {
        id: 2,
        name: 'Spaghetti Carbonara',
        description: 'Classic Roman pasta with eggs, pecorino cheese, guanciale, and black pepper',
        price: 165,
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&h=200&fit=crop',
        extras: ['Extra Parmesan', 'Extra Bacon', 'Extra Garlic', 'Extra Chili Flakes']
    },
    {
        id: 3,
        name: 'Lasagna',
        description: 'Layered pasta with ragù, béchamel sauce, and parmesan cheese, baked to perfection',
        price: 192,
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=200&fit=crop',
        extras: ['Extra Cheese', 'Extra Meat Sauce', 'Extra Garlic Bread', 'Extra Herbs']
    },
    {
        id: 4,
        name: 'Risotto',
        description: 'Creamy Italian rice dish with mushrooms, parmesan, and truffle oil',
        price: 178,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=200&fit=crop',
        extras: ['Extra Truffle Oil', 'Extra Mushrooms', 'Extra Parmesan', 'Extra Garlic']
    },
    {
        id: 5,
        name: 'Ravioli',
        description: 'Fresh pasta filled with ricotta and spinach, served with sage butter sauce',
        price: 183,
        image: Ravioli,
        extras: ['Extra Sage Butter', 'Extra Ricotta', 'Extra Spinach', 'Extra Parmesan']
    }
];

function ItalianKitchen() {
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
            kitchen: 'Italian'
        };
        console.log('Adding to cart:', newItem);
        addToCart(newItem);
        // التأكد من حفظ localStorage
        const currentCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const updatedCart = [...currentCart, newItem];
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        console.log('Saved to localStorage:', updatedCart);
        handleClosePopup();
    }
};

    const handleClosePopup = () => {
        setSelectedDish(null);
        setSelectedExtras([]);
    };

    return (
        <div className="italian-kitchen-page">
            <div className="italian-kitchen-container">
                <div className="italian-kitchen-header">
                    <Link to="/kitchens" className="back-arrow-italian">
                        ←
                    </Link>
                    <Link to="/">
    <img src={Logo} alt="Logo" className="logokitchen" />
</Link>
                    <h1 className="italian-kitchen-title">Italian Kitchen</h1>
                </div>

                <div className="italian-dishes-grid">
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
                <div className="popup-overlay-italian" onClick={handleClosePopup}>
                    <div className="popup-container-italian" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close-italian" onClick={handleClosePopup}>×</button>

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

export default ItalianKitchen;