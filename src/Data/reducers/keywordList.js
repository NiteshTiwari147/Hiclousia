const keywordList = (state=[], action) => {
    switch(action.type) {
        case 'addKeyword': 
            return action.list;
        case 'removeKeyword': 
            return state;
        case 'getList':
            return action.list;
        case 'clearAll':
            return [];
        default:
            return state;
    }
}

export default keywordList;