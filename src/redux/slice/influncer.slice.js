import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    influncer: null,
    isLoggedIn: false // Changed from 'state' to 'isLoggedIn' for clarity
};

export const influncerSlice = createSlice({
    name: 'influncer',
    initialState,
    reducers: {
        loginInfluncer: (state, action) => {
            state.influncer = action.payload;
            state.isLoggedIn = true; // Updated to reflect the new state property
        },
        logoutInfluncer: (state) => {
            state.influncer = null;
            state.isLoggedIn = false; // Updated to reflect the new state property
        }
    }
});

// Exporting actions and reducer
export const { loginInfluncer, logoutInfluncer } = influncerSlice.actions;
export default influncerSlice.reducer;
