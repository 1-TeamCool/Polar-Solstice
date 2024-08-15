import {useEffect, useState} from "react";
import Product from "../components/product.jsx";
import {addToCart} from "../utils/cart.js";
import './products.css';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    const handleProductClick = (productId) => {
        const product = products.find(p => p.product_id === productId);
        setSelectedProduct(product);
    }

    const addProductToCart = (productId) => {
        const product = products.find(p => p.product_id === productId);
        addToCart(product);
    }

    const handleClose = () => setSelectedProduct(null);

    useEffect(() => {
        //fetch the products
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(resp => {
                setProducts(resp)
            }).catch(err => {
                //FIX THIS
                //display something when the fetch fails
                console.log(err)
            }
        );
    }, []);


    return (
        <div className="products-container">
            {products.map((product, index) => (
                index % 3 === 0 && (
                    <div key={index} className="product-row">
                        {products.slice(index, index + 3).map(product => (
                            <div key={product.product_id} className="product-col">
                                <Product
                                    product={product}
                                    handleBuyProduct={addProductToCart}
                                    handleProductClick={handleProductClick}
                                />
                            </div>
                        ))}
                    </div>
                )
            ))}

            {selectedProduct && (
                <div className="modal_overlay" onClick={handleClose}>
                    <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal_header">
                            <h2>{selectedProduct?.name}</h2>
                            <button className="modal_close" onClick={handleClose}>&times;</button>
                        </div>
                        <div className="modal_body">
                            {selectedProduct?.details}
                        </div>
                        <div className="modal_footer">
                            <button onClick={handleClose} className="close_button">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;
