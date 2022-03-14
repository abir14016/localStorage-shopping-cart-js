const displayLocalStorageCart = () => {
    const cart = getCart();
    // console.log(cart);
    for (const name in cart) {
        displayProducts(name);
    }
}
const addItem = () => {
    const nameField = document.getElementById("product-name");
    const name = nameField.value;
    if (!name) {
        return;
    }
    displayProducts(name);
    addProductToCart(name);


    nameField.value = "";
}
const displayProducts = name => {
    const ul = document.getElementById("products")
    const li = document.createElement('li')
    li.innerText = name;
    ul.appendChild(li);
}
const getCart = () => {
    const cart = localStorage.getItem("cart")
    console.log(cart);
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;

}
const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    // for (const prop in cart) {
    //     console.log(prop, cart[prop]);
    // }
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringfied);
}
const placeOrder = () => {
    document.getElementById("products").textContent = '';
    localStorage.removeItem('cart');
}
displayLocalStorageCart();