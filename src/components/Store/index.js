import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter';
import { shopSlice } from './shop';
const Store = configureStore({
    reducer: { counter: counterSlice.reducer, shop: shopSlice.reducer },
});

export default Store;
