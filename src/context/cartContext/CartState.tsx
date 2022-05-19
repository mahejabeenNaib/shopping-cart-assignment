import React, { useReducer } from 'react';
import {
    initialState,
    REMOVE_CART_ITEM,
    RESET_CART_ITEM,
    SET_SELECTED_CATEGORY,
    UPDATE_CART_ITEM,
} from '../../constants/actions';
import CartContext from './cart-context';
// import { Product } from '../../services/AppService';
import  { SelectedCategory } from './cart-context';
import appReducer from './cart-reducer';

const CartState = ({ children } : any) => {
    const [CartState, dispatch] = useReducer(appReducer, initialState);

    const updateCart = (item: any) => {
        dispatch({
            type: UPDATE_CART_ITEM,
            payload: item,
        });
    };

    const removeCart = (item: any) =>
        dispatch({
            type: REMOVE_CART_ITEM,
            payload: item,
        });

    const resetCart = () =>
        dispatch({
            type: RESET_CART_ITEM,
        });

    const setSelectedCategory = (selectedCategory: SelectedCategory) => {
        dispatch({
            type: SET_SELECTED_CATEGORY,
            payload: selectedCategory,
        });
    };

    return (
        <CartContext.Provider
            value={{
                CartState,
                updateCart,
                removeCart,
                resetCart,
                setSelectedCategory,
            }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartState;
