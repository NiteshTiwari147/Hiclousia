const MAP_mode = (state=true, action) => {
    switch(action.type) {
        case 'GUIDANCE_MODE':
            return false;
        case 'RECOMENDATION_MODE':
            return true;
        default: 
            return true;
    }
}

export default MAP_mode;