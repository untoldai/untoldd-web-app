import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slice/admin.slice"; // Ensure this imports the reducer correctly
import userReducer from "./slice/user.slice"

const store = configureStore({
    reducer: {
        admin: adminReducer ,
        user:userReducer
    }
});

export default store;
