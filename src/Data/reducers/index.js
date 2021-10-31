import { combineReducers } from "redux";

import candidateList from "./candidateList";
import isSearched from "./isSearched";
import KeywordList from "./keywordList";

const allReducer = combineReducers({
    list : candidateList,
    searchFlag: isSearched,
    keywordList : KeywordList
});

export default allReducer