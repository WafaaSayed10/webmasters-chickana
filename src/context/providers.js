import { CartProvider } from "./cartContext";
import { CategoryProvider } from "./categoryContext";

export default function Providers({ children }) {
    return (
        <CartProvider>
        <CategoryProvider>
            {children}
        </CategoryProvider>
        </CartProvider>
    );
}
