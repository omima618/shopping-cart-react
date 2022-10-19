import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0, showAlert: false };
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        increase(state, action) {
            state.count += action.payload;
        },
        reset(state) {
            state.count = 0;
        },
        controlAlert(state) {
            state.showAlert = !state.showAlert;
        },
    },
});

export const counterActions = counterSlice.actions;
