// src/StorePage.js
import React from 'react';
import '../Style/Furniture.css';
import product1 from '../Images/product1.jpg';
import product2 from '../Images/product2.jpg';
import product3 from '../Images/product3.jpg';
import product4 from '../Images/product4.jpg';
import product5 from '../Images/product5.jpg';
import product6 from '../Images/product6.jpg';
import product7 from '../Images/product7.jpg';
import product8 from '../Images/product8.jpg';
import product9 from '../Images/product9.jpg';
import product10 from '../Images/product10.jpg';
import product11 from '../Images/product11.jpg';
import product12 from '../Images/product12.jpg';

const products = [
    {
        id: 1,
        name: 'Modern Sofa',
        description: 'A stylish and comfortable modern sofa.',
        price: '$499',
        imageUrl: product1
    },
    {
        id: 2,
        name: 'Dining Table',
        description: 'A spacious dining table for family meals.',
        price: '$799',
        imageUrl: product2
    },
    {
        id: 3,
        name: 'Office Chair',
        description: 'An ergonomic office chair for your home office.',
        price: '$199',
        imageUrl: product3
    },
    {
        id: 4,
        name: 'Patio Set',
        description: 'A complete patio set for outdoor relaxation.',
        price: '$899',
        imageUrl: product4
    },
    {
        id: 5,
        name: 'Patio Set',
        description: 'A complete patio set for outdoor relaxation.',
        price: '$899',
        imageUrl: product5
    },
    {
        id: 6,
        name: 'Patio Set',
        description: 'A complete patio set for outdoor relaxation.',
        price: '$899',
        imageUrl: product6
    },
    {
        id: 7,
        name: 'Patio Set',
        description: 'A complete patio set for outdoor relaxation.',
        price: '$899',
        imageUrl: product7
    },
    {
        id: 8,
        name: 'Patio Set',
        description: 'A complete patio set for outdoor relaxation.',
        price: '$899',
        imageUrl: product8
    },
    {
        id: 9,
        name: 'Patio Set',
        description: 'A complete patio set for outdoor relaxation.',
        price: '$899',
        imageUrl: product9
    },
    {
        id: 10,
        name: 'Patio Set',
        description: 'A complete patio set for outdoor relaxation.',
        price: '$899',
        imageUrl: product10
    },
    {
        id: 11,
        name: 'Patio Set',
        description: 'A complete patio set for outdoor relaxation.',
        price: '$899',
        imageUrl: product11
    },
    {
        id: 12,
        name: 'Patio Set',
        description: 'A complete patio set for outdoor relaxation.',
        price: '$899',
        imageUrl: product12
    },
    

    // Add more products as needed
];

const Furniture = () => {
    return (
        <div className="store-page">
            <h1>Our Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Furniture;
