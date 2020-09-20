import {combineReducers} from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

export default combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})
