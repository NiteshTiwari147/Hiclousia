import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css';

class NavigationBar extends React.Component {
    render() {
      return <div className="navigationBar">
          <div className="navigationBarContent">
            <MenuIcon />
            <div className="companyLogo">
              <h3>HICLOUSIA</h3>
            </div>
          </div>
      </div>;
    }
}

export default NavigationBar;