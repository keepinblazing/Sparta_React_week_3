import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from "redux";
import bucket from "./module/bucket"
import thunk from "redux-thunk";

const rootReducer = combineReducers({bucket});
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);



export default store;
