import dataReducer from "./data";
import { combineReducers } from "redux";
const allReducers = combineReducers({ dataReducer });
export default allReducers;
