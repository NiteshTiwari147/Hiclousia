import React from 'react';
// import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import searchHandler from '../../Service/SearchPage/candidate';
import BasicInfo from './components/basicInfo';
import Keywords from './components/keywords';
import './styles.css';

class Filters extends React.Component {
    render() {
        const serviceHander = new searchHandler();
        return <div className="filterContainer">
            <div className="filterContent">
                <BasicInfo />
                <Keywords />
                <button className="searchBtn" onClick={() => serviceHander.searchTriggered()}><SearchIcon />
                    <div>
                        Search
                    </div>
                </button>
            </div>
        </div>
    }
}

export default Filters;