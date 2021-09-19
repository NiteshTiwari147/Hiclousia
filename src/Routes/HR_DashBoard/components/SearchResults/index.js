import React from 'react';
import BasicMenu from './component/sortBy';
import Results from './component/results';

import searchHandler from '../../Service/SearchPage/candidate';

import './styles.css'

class SearchResults extends React.Component {
    state = {
        list : []
    }
    render() {
        const searchResult = new searchHandler();
        const list = searchResult.getCandidates();
        return <div className="searchResultContent">
            <div className="headingTile">
                <h1>Search Results</h1>
                <BasicMenu />
            </div>
            <div>
                <Results candidates={this.state.list}/>
            </div>
        </div>
    }
}

export default SearchResults;