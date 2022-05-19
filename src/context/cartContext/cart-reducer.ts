import get from 'lodash/get';
import { REMOVE_CART_ITEM, RESET_CART_ITEM, SET_SELECTED_CATEGORY, UPDATE_CART_ITEM } from '../../constants/actions';
import { CartState, SelectedCategory } from './cart-context';
// import { Product } from '../../services/AppService';

interface Action {
    type: string;
    payload?: any | SelectedCategory;
}

const cartReducer = (state: CartState, action: Action): CartState => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_CART_ITEM: {
            const product = payload as any;
            if (state.cartItems.find((e: any) => e.id === get(product, 'id'))) {
                return {
                    ...state,
                    cartCount: state.cartCount + 1,
                    cartItems: state.cartItems.map((item: any) => {
                        if (item.id === get(product, 'id')) {
                            return { ...item, qty: item.qty + 1 };
                        }
                        return item;
                    }),
                };
            } else {
                return {
                    ...state,
                    cartCount: state.cartCount + 1,
                    cartItems: state.cartItems.concat({ ...product, qty: 1 }),
                };
            }
        }
        case REMOVE_CART_ITEM: {
            const product = payload as any;
            const findItem = state.cartItems.find((item: any) => item.id === get(product, 'id'));
            if (findItem) {
                if (findItem.qty > 1) {
                    return {
                        ...state,
                        cartCount: state.cartCount - 1,
                        cartItems: state.cartItems.map((item: any) => {
                            if (item.id === get(product, 'id')) {
                                return { ...item, qty: item.qty - 1 };
                            }
                            return item;
                        }),
                    };
                } else {
                    return {
                        ...state,
                        cartCount: state.cartCount - 1,
                        cartItems: state.cartItems.filter((item: any) => item.id !== get(product, 'id')),
                    };
                }
            } else {
                return { ...state };
            }
        }
        case RESET_CART_ITEM: {
            return { ...state, cartCount: 0, cartItems: [] };
        }
        case SET_SELECTED_CATEGORY: {
            const selectedCategory = payload as SelectedCategory;
            return {
                ...state,
                selectedCategory: selectedCategory,
            };
        }
        default:
            return state;
    }
};

export default cartReducer;
