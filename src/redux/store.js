import counterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    },
    devTools: true
});
export default store;