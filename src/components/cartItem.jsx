import React from 'react';
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../utils/cart";
import './cartItem.css';

const CartItem = ({ cartItem }) => {
    const { product_id, name, price, image, description, quantity } = cartItem;

    return (
        <div className="custom-card">
            <div className="custom-card-body">
                <div className="custom-row">
                    {/* Left side: Product details */}
                    <div className="custom-col-left">
                        <h3 className="custom-card-title">{name}</h3>
                        <div className="custom-image-container">
                            <img src={image} alt={name} className="custom-image" />
                        </div>
                        <div className="custom-price">
                            <h5>${price.toFixed(2)}</h5>
                        </div>
                    </div>
                    {/* Right side: Actions */}
                    <div className="custom-col-right">
                        <button className="custom-button delete-button" onClick={() => removeFromCart(product_id)}>Delete</button>
                        <div className="custom-quantity-control">
                            <button className="custom-button quantity-button" onClick={() => decreaseQuantity(product_id)}>-</button>
                            <span className="custom-quantity">{quantity}</span>
                            <button className="custom-button quantity-button" onClick={() => increaseQuantity(product_id)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
