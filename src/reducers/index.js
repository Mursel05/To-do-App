import dataReducer from "./data";
import error from "./error";
import job from "./job";
import transformImg from "./transformImg";
import { combineReducers } from "redux";
const allReducers = combineReducers({ dataReducer, error, job, transformImg });
export default allReducers;
