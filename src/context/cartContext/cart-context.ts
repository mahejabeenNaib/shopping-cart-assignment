import { createContext } from 'react';
// import { Product } from '../../services/AppService';

export interface Product {
    name: string,
    imageURL: string,
    description: string,
    price: number,
    stock: number,
    category: string,
    sku: string,
    id: string,
}

export interface CartItem extends Product{
    qty: number,
}

export type SelectedCategory = string | null;

export interface CartState {
    cartCount: number,
    cartItems: CartItem[],
    selectedCategory: SelectedCategory,
}

export interface CartContextProps {
    CartState: CartState;
    updateCart: (item: Product) => void;
    removeCart: (item: Product) => void;
    resetCart: () => void;
    setSelectedCategory: (selectedCategory: SelectedCategory) => void;
}

const CartContext = createContext({} as CartContextProps);

export default CartContext;
