export const addToCart = (product) => {
    const cart = getCartFromLocalStorage();

    //see if the product exists already
    const foundItem = cart.find(prod => prod.product_id === product.product_id);

    //if so increase the product quantity
    if (foundItem) {
        foundItem.quantity +=1;
    }else{
        //if not add to the cart
        product.quantity = 1;
        cart.push(product);
    }

    //save the cart
    saveCartToLocalStorage(cart)
}

export const getCartFromLocalStorage = () => {
    //get the cart from localStorage
    try {
        const possibleCart = localStorage.getItem('cart');
        return  possibleCart ? JSON.parse(possibleCart) : []
    }catch(err) {
        console.error('Unable to find or parse the cart', err)
        return []
    }
}

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
}

export const removeFromCart = (product_id) => {
    let cart = getCartFromLocalStorage();
    const foundItem = cart.find(prod => prod.product_id === product_id);

    //find product and adjust quantity
    if (foundItem) {
        cart = cart.filter(prod => prod.product_id !== product_id);
    }
    //save the cart
    saveCartToLocalStorage(cart)
}

export const increaseQuantity = (product_id) => {
    let cart = getCartFromLocalStorage();
    const foundItem = cart.find(prod => prod.product_id === product_id);

    //find product and adjust quantity
    if (foundItem) {
        foundItem.quantity += 1;
    }
    //save the cart
    saveCartToLocalStorage(cart)
}

export const decreaseQuantity = (product_id) => {
    let cart = getCartFromLocalStorage();
    const foundItem = cart.find(prod => prod.product_id === product_id);

    //find product and adjust quantity
    if (foundItem) {
        foundItem.quantity -= 1;
    }

    if (foundItem.quantity <= 0){
        cart = cart.filter(prod => prod.product_id !== product_id);
    }
    //save the cart
    saveCartToLocalStorage(cart)
}
