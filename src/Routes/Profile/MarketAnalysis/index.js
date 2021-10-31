import React from 'react';
import NavigationBar from '../../HR_DashBoard/components/NavigationBar';
import JobsGraph from './components/jobsGraph';
import SelectLabels from './components/filters';
import JobsTable from './components/jobsTable';
import SearchResults from './components/results';
import Divider from '@mui/material/Divider';

import './styles.css';

class MarketAnalysis extends React.Component {
    render() {
        return <div className="container">
            <NavigationBar />
            <h2 className="jobAnalysisHeading">JOB ANALYSIS</h2>
            <div className="analysisRow"> 
                <div className="columnOne">
                    <SelectLabels />  
                    <JobsGraph />
                </div>
                <Divider orientation="vertical" sx={{ borderColor: '#0370ff'}} />
                <JobsTable />
            </div>
            <h2 className="recomendationsHeading">RECOMENDATIONS</h2>
            <div className="recomendationsResults">
                <SearchResults />
            </div>
      </div>;
    }
}

export default MarketAnalysis;