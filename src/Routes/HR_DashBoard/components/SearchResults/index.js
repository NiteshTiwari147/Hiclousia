import React from 'react';
import BasicMenu from './component/sortBy';
import Results from './component/results';
import { useSelector, useDispatch } from 'react-redux';
import { showResult } from './actions';

import searchHandler from '../../Service/SearchPage/candidate';

import './styles.css'

function SearchResults() {
    const candidateList = useSelector(state => state.list);
    return <div className="searchResultContent">
        <div className="headingTile">
            <h2>Search Results</h2>
            <BasicMenu />
        </div>
        <div>
            <Results candidates={candidateList}/>
        </div>
    </div>
}

export default SearchResults;