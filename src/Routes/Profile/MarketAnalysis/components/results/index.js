import React from 'react';
import { useSelector } from 'react-redux';

import JobsCard from './components/jobCard';
import { getJobs } from '../../service/jobsHandler';
import { getGuindance } from '../../service/guidanceHandler';
import './styles.css';

const jobs = (resp,jobsLoading) => { return jobsLoading ?<div>NOOOO </div> : resp.map ( cardDetails => <JobsCard cardDetails={cardDetails}/>)}

const guidance = (resp,guidanceLoading) => { return guidanceLoading ?<div>NOOOO </div> : resp.map ( cardDetails => <JobsCard cardDetails={cardDetails}/>)}

function SearchResults() {
    const [guidanceResult, setGuidanceResult] = React.useState([]);
    const [guidanceLoading, setGuidanceLoading] = React.useState(true);
    const [jobsLoading, setJobsLoading] = React.useState(true);
    const [jobsResult, setJobsResult] = React.useState([]);
    const mode = useSelector(state => state.MAP_mode);
    React.useEffect(() => {
        fetch("/guidance")
        .then((res) => res.json())
        .then((data) => {
            console.log("here is the response", data);  
            setGuidanceResult(data.resp)});
            setGuidanceLoading(false);
    }, []);
    React.useEffect(() => {
        fetch("/jobs")
        .then((res) => res.json())
        .then((data) => {
            console.log("here is the response", data);  
            setJobsResult(data.resp)});
            setJobsLoading(false);
    }, []);
  console.log('here is the result ', guidanceResult);
    return<div className="results">
    { mode ? jobs(jobsResult,jobsLoading) : guidance(guidanceResult,guidanceLoading)}
    </div>
}

export default SearchResults;