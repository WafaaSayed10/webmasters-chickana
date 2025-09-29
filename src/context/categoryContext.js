import { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategoryName, setSelectedCategoryName] = useState(null);
    const displayCategory=(cat)=>{
        setSelectedCategory(cat.items)
        setSelectedCategoryName(cat.category)
    }

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory,displayCategory,selectedCategoryName,setSelectedCategoryName }}>
            {children}
        </CategoryContext.Provider>
    );
};