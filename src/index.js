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
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './Data/reducers';

import WelcomePage from './Routes/Welcome';
import SearchPage from './Routes/HR_DashBoard';
import Dashboard from './Routes/Profile/Dashboard';
import Profile from './Routes/Profile/TA';
import MarketAnalysis from './Routes/Profile/MarketAnalysis';

const myStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <Router>
    <Switch>
      <Route path="/welcome">
        <WelcomePage />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/HR/profile">
        <Profile />
      </Route>
      <Route path="/profile/dashboard">
        <Dashboard />
      </Route>
      <Route path="/profile/market_analysis">
        <MarketAnalysis />
      </Route>
    </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
