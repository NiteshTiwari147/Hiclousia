import React from 'react';

import DoneAllIcon from '@mui/icons-material/DoneAll';
import { IconContext } from "react-icons";
import { DiReact, DiNodejsSmall, DiNodejs, DiHtml5, DiCss3,DiJava } from "react-icons/di";
import { SiGraphql, SiPython } from "react-icons/si";
import { MdError } from 'react-icons/md';
import './styles.css';

const progressBar = () => {
    return <div className="progressSkill">
        <div className="progressSkill-value">

        </div>
    </div>
}

function Matching() {
    const matchedSkills = [
        {
            title: 'React JS',
            used: 12,
            icon: <DiReact />
        },
        {
            title: 'JavaScript',
            used: 13,
            icon: <DiNodejsSmall />
        },
        {
            title: 'Node JS',
            used: 10,
            icon: <DiNodejs />
        },
        {
            title: 'CSS',
            used: 12,
            icon: <DiCss3 />
        },
        {
            title: 'HTML5',
            used: 10,
            icon: <DiHtml5 />
        },
        {
            title: 'JAVA',
            used: 5,
            icon: <DiJava />
        },
    ]

    const unMatchedSkills = [
        {
            title: 'GraphQL',
            icon: <SiGraphql />
        },
        {
            title: 'Python',
            icon: <SiPython />
        }
    ]
    return <div className="matchingBox">
            <div className="matchingHeader">
             <DoneAllIcon fontSize="small" color='success' /> 
             <h5 style={{marginLeft: '0.5rem'}}>
             Top matching Skills
             </h5>
            </div>
            { matchedSkills.map( skill => <div className="matchingSkill">
                <div className="skillDetail">
                    <h7 style={{margin: '0.2rem', color: '#0370ff'}}>{skill.title}</h7>
                    <h7 style={{margin: '0.2rem', color: 'grey'}}>Used in {skill.used} projects</h7>
                    {progressBar()}
                </div>
                <div className="skillIcon">
                <IconContext.Provider value={{ color: "#0370ff", size: "2rem" }}>
                    <div>
                        {skill.icon}
                    </div>
                </IconContext.Provider>
                </div>
            </div> )}
            <div className="unMatchedHeader">
                <IconContext.Provider value={{ color: "#f6ae04", size: "1.5rem" }}>
                    <div>
                        <MdError />
                    </div>
                </IconContext.Provider>
                <h5 style={{marginLeft: '0.5rem'}}>
                    Unmatched Skills
                </h5>
            </div>
            {unMatchedSkills.map( skill => <div className="unMatchedSkill"> 
                <h7 style={{margin: '0.2rem', color: '#f6ae04'}}>{skill.title}</h7>
                <IconContext.Provider value={{ color: "#f6ae04", size: "1rem" }}>
                    <div>
                        {skill.icon}
                    </div>
                </IconContext.Provider>
            </div>)}
            <div style= {{ marginBottom: '1rem'}}/>
    </div>
}

export default Matching;