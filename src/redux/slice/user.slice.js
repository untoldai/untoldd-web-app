import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoggedIn: false // Changed from 'state' to 'isLoggedIn' for clarity
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true; // Updated to reflect the new state property
        },
        logoutUser: (state) => {
            state.user = null;
            state.isLoggedIn = false; // Updated to reflect the new state property
        }
    }
});

// Exporting actions and reducer
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
