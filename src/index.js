import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WelcomePage from './Routes/Welcome';
import SearchPage from './Routes/HR_DashBoard';
import Dashboard from './Routes/Profile/Dashboard';
import MarketAnalysis from './Routes/Profile/MarketAnalysis';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route path="/welcome">
        <WelcomePage />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/profile/dashboard">
        <Dashboard />
      </Route>
      <Route path="/profile/market_analysis">
        <MarketAnalysis />
      </Route>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
