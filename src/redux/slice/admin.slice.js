import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: null,
    isLoggedIn: false // Changed from 'state' to 'isLoggedIn' for clarity
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        loginAdmin: (state, action) => {
            state.admin = action.payload;
            state.isLoggedIn = true; // Updated to reflect the new state property
        },
        logoutAdmin: (state) => {
            state.admin = null;
            state.isLoggedIn = false; // Updated to reflect the new state property
        }
    }
});

// Exporting actions and reducer
export const { loginAdmin, logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
