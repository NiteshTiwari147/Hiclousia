import React from 'react';
// import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { triggerSearch, showResult } from './actions';
import BasicInfo from './components/basicInfo';
import Keywords from './components/keywords';
import './styles.css';


function Filters() {
    const dispatch = useDispatch();
    return (
        <div className="filterContainer">
        <div className="filterContent">
            <BasicInfo />
            <Keywords />
            <button className="searchBtn" onClick={() =>{ dispatch(triggerSearch()); dispatch(showResult())}}><SearchIcon />
                <div>
                    Search
                </div>
            </button>
        </div>
    </div>
    )
}

export default Filters;