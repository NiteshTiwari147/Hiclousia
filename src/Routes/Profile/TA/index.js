import React from 'react';

import ProfileInfo from '../../../components/profileInfo';
import ATS from '../../../components/ATS';
import Projects from '../../../components/projects';
import CareerJourney from '../../../components/careerJourney';
import NavigationBar from '../../HR_DashBoard/components/NavigationBar';
import TopSkillBarGraph from '../../../components/topSkillBar';

import ScoreIndicator from './components/scoreIndicator';
import Matching from './components/matching';


function Profile(props) {
    return <div className="container">
        <button onClick={props.handleClose}>Match</button>
        <div className="dashboardLayout">
            <div className="dashboardStack">
                <ProfileInfo />
                <Matching />
            </div>
            <div className="dashboardStack">
                <ATS />
                <Projects title ='Fraud Detenction using AI 'duration="1 Month" playTime="2:53 mins" companyName="PayPal" imageURL="https://analyticsindiamag.com/wp-content/uploads/2020/01/top-10-DS-projects.png"/>
                <Projects title = 'Cryptography: Encryption using AES' duration="2 Months" playTime="3:06 mins" companyName="Uber" imageURL="https://assets.rbl.ms/25586304/origin.jpg" />
            </div>
            <div className="dashboardStack">
                <ScoreIndicator />
                <TopSkillBarGraph wdth={300} />
                <CareerJourney />
            </div>
        </div>
    </div>
}

export default Profile;