import * as React from 'react';

import { Steps } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

import { FcBusiness } from "react-icons/fc";
import { IoMdSchool } from "react-icons/io";
import { IconContext } from "react-icons";

import './styles.css';

const styles = {
    marginTop: '2rem',
    width: '200px',
    display: 'inline-table',
    verticalAlign: 'top'
};


export default function CareerJourney() {
  return (
    <div className="careerJourney">
        <Steps current={1} vertical style={styles}>
            <Steps.Item title={<div className="careerTitle">PayPal</div>} description={<div className="careerDescription">
                <div className="careerPosition">Software enginer 2</div>
                <div className="careerDuration">2020-2021</div>
            </div>} icon={
                 <IconContext.Provider value={{ color: "#0370ff", size: "2rem" }}>
                     <FcBusiness />
                </IconContext.Provider>
            }/>
            <Steps.Item title={<div className="careerTitle">PayPal</div>} description={<div className="careerDescription">
                <div className="careerPosition">Software enginer 1</div>
                <div className="careerDuration">2019-2020</div>
            </div>} icon={
                 <IconContext.Provider value={{ color: "#0370ff", size: "2rem", borderRadius: '50%' }}>
                     <FcBusiness />
                </IconContext.Provider>
            }/>
            <Steps.Item title={<div className="careerTitle">IIT Madras</div>} description={<div className="careerDescription">
                <div className="careerPosition">Mtech Comp. Sc.</div>
                <div className="careerDuration">2018-2019</div>
            </div>} icon={
                 <IconContext.Provider value={{ size: "1.5rem", borderRadius: '50%' }}>
                     <IoMdSchool />
                </IconContext.Provider>
            }/>
            <Steps.Item title="Waiting" description="Description"  icon={ <FcBusiness />} />
        </Steps>
    </div>
  );
}
