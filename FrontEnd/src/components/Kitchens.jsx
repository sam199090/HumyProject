// components/Kitchens.jsx
import React from 'react';
import './Kitchens.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

// صور وهمية للمطابخ
const kitchenImages = {
    'Syrian': 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=300&h=200&fit=crop',
    'Italian': 'https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=300&h=200&fit=crop',
    'Japanese': 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&h=200&fit=crop',
    'Turkish': 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=300&h=200&fit=crop',
    'Chinese': 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop'
};

// بيانات المطابخ الثابتة
const kitchensData = [
    {
        id: 1,
        name: 'Italian',
        description: 'Classic Italian pasta, pizza, and delicious Mediterranean dishes'
    },
    {
        id: 2,
        name: 'Syrian',
        description: 'Authentic Syrian cuisine with rich flavors and traditional dishes'
    },
    {
        id: 3,
        name: 'Japanese',
        description: 'Fresh sushi, sashimi, and authentic Japanese flavors'
    },
    {
        id: 4,
        name: 'Turkish',
        description: 'Traditional Turkish kebabs, mezes, and Ottoman cuisine'
    },
    {
        id: 5,
        name: 'Chinese',
        description: 'Authentic Chinese wok dishes, dim sum, and Asian flavors'
    }
];

function Kitchens() {
    return (
        <div className="kitchens-page">
            <div className="kitchens-container">
                <div className="kitchens-header">
                    <Link to="/order" className="back-arrow-kitchens">
                        ←
                    </Link>
                    <Link to="/">
    <img src={Logo} alt="Logo" className="logokitchen" />
</Link>
                    <h1 className="kitchens-title">Choose Your Kitchen</h1>
                </div>

                <div className="kitchens-grid">
                    {kitchensData.map((kitchen) => (
                        <Link to={`/${kitchen.name.toLowerCase()}Kitchen`} key={kitchen.id} className="kitchen-card">
                            <div className="kitchen-image-wrapper">
                                <img src={kitchenImages[kitchen.name]} alt={kitchen.name} className="kitchen-image" />
                            </div>
                            <div className="kitchen-info">
                                <h3 className="kitchen-name">{kitchen.name}</h3>
                                <p className="kitchen-description">{kitchen.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Kitchens;