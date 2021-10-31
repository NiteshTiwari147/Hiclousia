import React from 'react'
import './styles.css';
import NavigationBar from './components/NavigationBar';
import UploaderJD from './components/UploaderJD'
import UploadeGeek from './components/UploaderJD/component';
import Filters from './components/Filters';
import SearchResult from './components/SearchResults';

class SearchPage extends React.Component {
    render() {
      return <div className="container">
          <NavigationBar />
          <UploaderJD />
          <Filters />
          <SearchResult />
      </div>;
    }
}

export default SearchPage;