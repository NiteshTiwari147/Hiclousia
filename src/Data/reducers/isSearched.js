const isSearched = (state = false, action) => {
    switch(action.type) {
        case 'SEARCHED': 
            return true;
        case 'RESET': 
            return false;
        default: 
            return state;
    }
}

export default isSearched;