import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter';
import { shopSlice } from './shop';
import { authSlice } from './auth';
const Store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        shop: shopSlice.reducer,
        auth: authSlice.reducer,
    },
});

export default Store;
