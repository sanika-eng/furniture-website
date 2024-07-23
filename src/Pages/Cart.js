import React, { useState } from 'react';
import '../Style/Cart.css';
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

const initialCartItems = [
    {
        id: 1,
        name: 'Modern Sofa',
        description: 'A stylish and comfortable modern sofa.',
        price: '$5999',
        image: product1
    },
    {
        id: 2,
        name: 'Cozy Comfort Beds',
        description: 'A soft and comfy bed.',
        price: '$3999',
        image: product2
    },
    {
        id: 3,
        name:'Dining Table',
        description: 'A best memories are made  gathered around the table.',
        price: '$2999',
        image: product3
    },
    {
        id: 4,
        name: 'wardrobe',
        description: 'Fashion forward always.',
        price: '$4500',
        image: product4
    },
    {
        id: 5,
        name: 'Kitchen Drawers',
        description: 'Happiness is small house with a beautiful kitchen.',
        price: '$6000',
        image: product5
    },
    {
        id: 6,
        name: 'Modern Chairs',
        description:'Creating the art of stylish leaving.',
        price: '$899',
        image: product6
    },
    {
        id: 7,
        name:'Teapoy',
        description: 'It holds everything.',
        price: '$899',
        image: product7
    },
    {
        id: 8,
        name: 'Tv Showcase',
        description: 'A furniture for showoff.',
        price: '$2999',
        image: product8
    },
    {
        id: 9,
        name: 'Office Table',
        description: 'Makes your space work for you.',
        price: '$899',
        image: product9
    },
    {
        id: 10,
        name: 'Office Table',
        description: 'Makes your space work for you.',
        price: '$899',
        image: product10
    },
    {
        id: 11,
        name: 'Book Holder',
        description: 'Knowledge grows on the book shelf of pations.',
        price: '$899',
        image: product11
    },
    {
        id: 12,
        name: 'Book Holder',
        description: 'What is the bookshelf other than a treasure chest for a querious mind.',
        price: '$1999',
        image: product12
    },
];

const Cart = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleQuantityChange = (id, quantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-info">
                            <h2>{item.name}</h2>
                            <p>${item.price}</p>
                            <div className="cart-item-controls">
                                <input 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    min="1"
                                />
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <h2>Total: ${totalAmount.toFixed(2)}</h2>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
};
export default Cart;
