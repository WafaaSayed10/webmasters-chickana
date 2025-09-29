export function getCart() {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
}

export function addToCart(item) {
    const cart = getCart();
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function removeFromCart(id) {
    let cart = getCart().filter(i => i.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
}