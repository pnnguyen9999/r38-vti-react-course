import counterReducer from "./reducers/counterReducer";
import { legacy_createStore as createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducers";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;