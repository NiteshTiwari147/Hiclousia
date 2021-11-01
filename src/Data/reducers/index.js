import { combineReducers } from "redux";

import candidateList from "./candidateList";
import isSearched from "./isSearched";
import KeywordList from "./keywordList";
import MAP_mode from './map_mode';

const allReducer = combineReducers({
    list : candidateList,
    searchFlag: isSearched,
    keywordList : KeywordList,
    MAP_mode: MAP_mode
});

export default allReducer