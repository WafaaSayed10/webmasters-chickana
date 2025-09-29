import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({})
    const [numOfItems, setNumOfItems] = useState(1)
    const [subTotalForAll, setSubTotalForAll] = useState(0)
    useEffect(() => {
        const storedCart = typeof window !== "undefined" && localStorage.getItem("cart");
        if (storedCart) setCart(JSON.parse(storedCart));
    }, []);
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);
    const areOptionsEqual = (options1, options2) => {
        return JSON.stringify(options1) === JSON.stringify(options2);
    };
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
                (cartItem) =>
                cartItem.id === item.id &&
                areOptionsEqual(cartItem.selectedOptions, item.selectedOptions)
            );
            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                const currentQuantity = updatedCart[existingItemIndex].quantity;
                const newQuantity = currentQuantity + item.quantity;
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: newQuantity,
                    newPrice: updatedCart[existingItemIndex].newPrice + item.newPrice,
                };
                return updatedCart;
            } else {
                return [...prevCart, { ...item, quantity: item.quantity || 1 }];
            }
        });
    };
    const removeFromCart = (id, selectedOptions) => {
        setCart((prevCart) =>
            prevCart.flatMap(
                (item) =>
                {
                    if (item.id === id && areOptionsEqual(item.selectedOptions, selectedOptions)) {
                        if (item.quantity > 1) {
                            return [{ ...item, quantity: item.quantity - 1 }];
                        } else {
                            return [];
                        }
                    }
                    return [item];
                }
            )
        );
    };
    const calculateTotal = (cart) => {
        return cart.reduce((total, item) => {
            return total + (item.newPrice);
        }, 0);
    };
    const total = calculateTotal(cart);

    return (
        <CartContext.Provider value={{ cart,setCart, addToCart, removeFromCart, selectedOptions, setSelectedOptions, numOfItems, setNumOfItems, subTotalForAll, setSubTotalForAll, total }}>
            {children}
        </CartContext.Provider>
    );
}