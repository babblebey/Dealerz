import { Product } from "../../types";

// Filter By Category Handler Function/Hook
export const useFilterByCategory = (products: Product[], category: string, callback: { (filteredProducts: Product[]): void }) => {
    // Duplicate Products
    const getProducts = [...products];

    // Filter Products - Return Products where Catogories Matches
    const filteredProducts = getProducts.filter(prod => prod.category === category);

    // Use the Filtered Products in Callback
    callback(filteredProducts);
}

// Filter By Search Handler Function/Hook
export const useFilterBySearch = (products: Product[], term: string, callback: { (filteredProducts: Product[]): void }) => {
    // Duplicate Products
    const getProducts = [...products];

    // Filter Products - Return Products where Search Term Matches Product Title
    const filteredProducts = getProducts.filter(prod => prod.title.toLowerCase().includes(term.toLowerCase()));

    // Use the Filtered Products in Callback
    callback(filteredProducts);
}