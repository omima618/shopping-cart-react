import { createSlice } from '@reduxjs/toolkit';

const initialState = { wishlist: [], cart: [] };
export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cart = [...action.payload];
        },
        addToWishlist(state, action) {
            state.wishlist = [...action.payload];
        },
        removeFromCart(state, action) {
            state.cart = [...action.payload];
        },
        removeFromWishlist(state, action) {
            state.wishlist = [...action.payload];
        },
    },
});

export const shopActions = shopSlice.actions;
