import React from 'react';

import JobsCard from './components/jobCard';
import './styles.css'

function SearchResults() {
    const jobsResult = [{ 'companyName': 'PayPal',
    'ATS': ['SDE-1', '$110k-$123k', '92%', '4.3']
    },
    { 'companyName': 'PayPal',
    'ATS': ['SDE-1', '$110k-$123k', '92%', '4.3']
    },
    { 'companyName': 'PayPal',
    'ATS': ['SDE-1', '$110k-$123k', '92%', '4.3']
    },
    { 'companyName': 'PayPal',
    'ATS': ['SDE-1', '$110k-$123k', '92%', '4.3']
    },
    { 'companyName': 'PayPal',
    'ATS': ['SDE-1', '$110k-$123k', '92%', '4.3']
    },
    { 'companyName': 'PayPal',
    'ATS': ['SDE-1', '$110k-$123k', '92%', '4.3']
    }
]
    return<div className="results">
            {jobsResult.map ( cardDetails => <JobsCard cardDetails={cardDetails}/> )}
        </div>
}

export default SearchResults;