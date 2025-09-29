import { createContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const ProductContext = createContext();

export default function ProductsProvider({ children }) {
    const api = axios.create({
        baseURL: "/api"
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const fetchProducts = async () => {
        let url = `/menu`;
        if (searchTerm) {
            url = `/item/${searchTerm}`;
        }
        if (selectedCategory) {
            url = `/menu/${selectedCategory}`;
        }
        const res = await api.get(url);
        return res.data;
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['products', searchTerm, selectedCategory],
        queryFn: fetchProducts,
        keepPreviousData: true,
    });

    return (
        <ProductContext.Provider
            value={{
                data,
                isLoading,
                error,
                searchTerm,
                setSearchTerm,
                selectedCategory,
                setSelectedCategory,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
