import { combineReducers } from "redux";

import candidateList from "./candidateList";
import isSearched from "./isSearched";

const allReducer = combineReducers({
    list : candidateList,
    searchFlag: isSearched
});

export default allReducer