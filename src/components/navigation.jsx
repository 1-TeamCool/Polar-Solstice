import React from "react";
import homeImage from "../images/home.png";
import './navigation.css'; // Import the custom CSS file

const Navigation = () => {
    return (
        <div className="custom-navbar">
            <div className="custom-container">
                <div className="brand">
                    <a href="/">
                        <img className="brand-image" src={homeImage} alt="Home" />
                    </a>
                </div>
                <nav className="custom-nav">
                    <a className="custom-nav-link" href="/">Home</a>
                    <a className="custom-nav-link" href="/products">Products</a>
                    <a className="custom-nav-link" href="/account">Account</a>
                    <a className="custom-nav-link" href="/cart">My Cart</a>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;
