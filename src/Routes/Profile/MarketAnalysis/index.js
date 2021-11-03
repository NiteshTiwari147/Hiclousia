import React from 'react';
import NavigationBar from '../../HR_DashBoard/components/NavigationBar';
import JobsGraph from './components/jobsGraph';
import SelectLabels from './components/filters';
import JobsTable from './components/jobsTable';
import ResultHeader from './components/resultHeader';
import SearchResults from './components/results';
import Divider from '@mui/material/Divider';
import './styles.css';

class MarketAnalysis extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="container">
            <NavigationBar />
            <h4 className="jobAnalysisHeading">JOB ANALYSIS</h4>
            <div className="analysisRow"> 
                <div className="columnOne">
                    <SelectLabels />  
                    <JobsGraph />
                </div>
                <Divider orientation="vertical" sx={{ borderColor: '#0370ff'}} />
                <JobsTable />
            </div>
            <div className = "resultHeader">
                <h4 className="recomendationsHeading">RECOMENDATIONS</h4>
                <div>
                    <ResultHeader/>
                </div>
                </div>
            <div className="recomendationsResults">
                <SearchResults />
            </div>
      </div>;
    }
}

export default MarketAnalysis;