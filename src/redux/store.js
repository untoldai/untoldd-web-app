import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slice/admin.slice"; // Ensure this imports the reducer correctly

const store = configureStore({
    reducer: {
        admin: adminReducer 
    }
});

export default store;
