import React from 'react';
import SearchField from "react-search-field";

class SearchBar extends React.Component {
    render() {
        return <SearchField
        classNames="searchBar"
        placeholder="Search..."
        onChange={() => {}}
        searchText="Search by name, company or location"
        classNames="test-class"
      /> 
    }
}

export default SearchBar;