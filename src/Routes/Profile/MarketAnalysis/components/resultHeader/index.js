import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Switch from '@mui/material/Switch';

import { switch2guidance, switch2Recomedation } from '../../action';

function ResultHeader (props) {
    const mode = useSelector(state => state.MAP_mode)
    const dispatch = useDispatch();
    const onChangeHandler = () => {
        if(mode) {
            dispatch(switch2guidance());
        }
        else {
            dispatch(switch2Recomedation())
        }
    }
    return <div className="modeSelect">
        {mode ? <div>Switch to Guidance Mode</div> : <div>Switch to Recomendations</div>}
        <Switch defaultChecked onChange={onChangeHandler} />
    </div>
}

export default ResultHeader;