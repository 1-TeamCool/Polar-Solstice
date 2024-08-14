/* eslint-disable no-unused-vars */

export const addToCart = (product) => {
    const cart = getCartFromLocalStorage();
    //see if the product exists already
    //if so increase the product quantity
    //if not add to the cart

    //save the cart
    saveCartToLocalStorage(cart)
}

const getCartFromLocalStorage = () => {
    //get the cart from localStorage
    try {
        const possibleCart = localStorage.getItem('cart');
        return  possibleCart ? JSON.parse(possibleCart) : []
    }catch(err) {
        console.error('Unable to find or parse the cart', err)
        return {}
    }
}

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeFromCart = (productId, quantity) => {
    const cart = getCartFromLocalStorage();
    //find product and adjust quantity
}
