import { combineReducers } from "redux";
import { fileReducer } from "./fileReducer";

export const rootReducer = combineReducers({
    files: fileReducer,
})