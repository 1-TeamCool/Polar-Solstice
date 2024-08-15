import React from 'react';
import './product.css';

const Product = ({ product, handleBuyProduct, handleProductClick }) => {

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    };

    return (
        <>
            {product && product?.name ? (
                <div className="product-card" onClick={() => handleProductClick(product.product_id)}>
                    <div className="product-card-body">
                        <h3 className="product-title">{product?.name}</h3>
                        <img
                            className="product-image"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>
                    <div className="product-footer">
                        <div className="product-price">{formatPrice(product.price)}</div>
                        <button className="buy-button" onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the card's onClick
                            handleBuyProduct(product.product_id);
                        }}>
                            Buy
                        </button>
                    </div>
                </div>
            ) : (
                <>Missing Product</>
            )}
        </>
    );
};

export default Product;
