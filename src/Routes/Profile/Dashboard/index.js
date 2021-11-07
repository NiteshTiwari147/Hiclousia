import React from 'react'

import ATS from '../../../components/ATS';
import ProfileInfo from '../../../components/profileInfo';
import SkillPieChart from '../../../components/skillPieChart';
import Projects from '../../../components/projects';
import TopSkillBarGraph from '../../../components/topSkillBar';
import NavigationBar from '../../HR_DashBoard/components/NavigationBar';
import RankingGraph from './components/rankingGraph';
import TopprList from './components/toppersList';

import './styles.css';

class Dashboard extends React.Component {
  constructor(props) { 
    super(props); 
    this.state = {
      ATS: {
        communication: '',
        prob2Switch: '',
        projects: '',
        skill: ''
      },
      basicInfo: {
        fullName: '',
        designation: '',
        companyName: ''
      },
      pieChart: [],
      projectList : [],
      rankingGraph: [],
      topSkill: [],
      toppr: []
    }; 
} 
  componentDidMount() {
    fetch("/canDashProjects")
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            ATS: data.resp.ATS,
            basicInfo: data.resp.basicInfo,
            pieChart: data.resp.pieChart,
            projectList: data.resp.projectList,
            rankingGraph: data.resp.rankingGraph,
            topSkill: data.resp.topSkill,
            toppr: data.resp.toppr
          });      
        });
    
    
  }

    render() {
      const { communication, prob2Switch, projects, skill} = this.state.ATS;
      const { fullName, designation, companyName } = this.state.basicInfo;
      return  <div className="container">
         <NavigationBar />
         <div className="dashboardLayout">
          <div className="dashboardStackOne">
              <ProfileInfo name={fullName} position={designation} companyName={companyName} />
              <SkillPieChart  data={this.state.pieChart}/>
              <TopSkillBarGraph data={this.state.topSkill} />
          </div>
          <div>
            <ATS communication={communication} prob_to_switch={prob2Switch} projects={projects} skills={skill}  />
            {this.state.projectList.map( project => <Projects title={project.title} duration={project.duration} playTime={project.playTime} companyName={project.companyName} imageURL={project.imageURL} />) }
          </div>
          <div className="dashboardStackThree">
            <RankingGraph data={this.state.rankingGraph} />
            <TopprList topprs={this.state.toppr} />
          </div>  
        </div>
      </div>
    }
}

export default Dashboard;