
class searchService {
    constructor() {
        this.isSearchClicked = false;
        this.list = [];
    }
    searchTriggered() {
       this.isSearchClicked = true;
       this.list = [
        {
            name: 'Nitesh Tiwari',
            currentJob: {
                position: 'SDE-2',
                company: 'PayPal',
                duration: {
                    from: '2019',
                }
            },
            ATS: [91.7, 29, 89.33, 84.177]
        },
        {
            name: 'Sachin agarwal',
            currentJob: {
                position: 'SDE-2',
                company: 'Airtel',
                duration: {
                    from: '2019',
                }
            },
            ATS: [91.7, 29, 79.33, 80.26]
        },
        {
            name: 'Mahesh Sharma',
            currentJob: {
                position: 'SDE-2',
                company: 'Flipkart',
                duration: {
                    from: '2019',
                }
            },
            ATS: [91.7, 29, 83.33, 94.26]
        },
        {
            name: 'Shezad khan',
            currentJob: {
                position: 'SDE-1',
                company: 'Amazon',
                duration: {
                    from: '2019',
                }
            },
            ATS: [91.7, 29, 89.33, 94.26]
        },
    ]; 
    }
    
    getCandidates() { 
       return this.list;
    }
} 

export default searchService;