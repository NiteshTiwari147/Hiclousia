import React from 'react';

import './styles.css';

class Keywords extends React.Component {
    render() {
        let keywordsObject = [ 'reactJS', 'nodeJS', 'typescript', 'graphQL', 'AJAX' , '2+ yrs'];
        return <div className="keywordsBox">
            {keywordsObject.map( (obj) => {
               return  <div className="keyword">
                 #{obj}
             </div>
            })}
        </div>
    }
}

export default Keywords;