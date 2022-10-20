import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isLoggedin: null,
    showAlert: false,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authStatus(state, action) {
            state.isLoggedin = action.payload;
        },
        showAlert(state, action) {
            state.showAlert = action.payload;
        },
    },
});
export const authActions = authSlice.actions;
