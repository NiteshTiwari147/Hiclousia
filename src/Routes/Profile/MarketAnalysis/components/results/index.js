import React from 'react';
import { useSelector } from 'react-redux';

import JobsCard from './components/jobCard';
import { getJobs } from '../../service/jobsHandler';
import { getGuindance } from '../../service/guidanceHandler';
import './styles.css'

function SearchResults() {
    const mode = useSelector(state => state.MAP_mode);
    const jobsResult = getJobs()
    const guidanceResult = getGuindance();
    return<div className="results">
            { mode ? jobsResult.map ( cardDetails => <JobsCard cardDetails={cardDetails}/>) : guidanceResult.map ( cardDetails => <JobsCard cardDetails={cardDetails}/>)}
        </div>
}

export default SearchResults;