import React, { useState, useEffect } from 'react';

import {getCartFromLocalStorage} from "../utils/cart";
import CartItem from "../components/cartItem";
import "./cart.css"

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Initial load from localStorage
        const storedCart = getCartFromLocalStorage() || [];
        setCart(storedCart);

        const handleStorageChange = (event) => {
            if (event.key === 'cart') {
                const updatedCart = getCartFromLocalStorage() || [];
                setCart(updatedCart);
            }
        };

        const handleCartUpdate = () => {
            const updatedCart = getCartFromLocalStorage() || [];
            setCart(updatedCart);
        };

        // Listen for storage changes from other tabs
        window.addEventListener('storage', handleStorageChange);

        // Listen for cart updates within the same tab
        window.addEventListener('cartUpdated', handleCartUpdate);

        // Cleanup listeners on unmount
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('cartUpdated', handleCartUpdate);
        };
    }, []);

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-heading">Your Cart</h1>
            <div className="cart-row">
                {cart?.length > 0 ? (
                    cart.map(item => (
                        <div key={item.product_id} className="cart-col">
                            <CartItem cartItem={item} />
                        </div>
                    ))
                ) : (
                    <div className="cart-col">
                        <div className="cart-card cart-card-center">
                            <div className="cart-card-body">No items in cart</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="cart-card cart-mt-4">
                <div className="cart-card-body">
                    <h4 className="cart-text-end">Sub-Total: ${calculateTotal()}</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;
