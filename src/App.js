import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Landing from './screens/Landing';
import SignIn from './screens/SignIn';
import DashBoard from './screens/Dashboard';
import Account from './screens/Account';
import * as ROUTES from './navigation/routes';

function App() {

  return (
    <Router
      basename="/humantiv-dashboard"
    >
      <div
      className="wrapper"
        style= {{
          flex: 1,
          height: '100%',
        }}
      >
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.HOME} component={DashBoard} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
      </div>
    </Router>
  );
}

export default App;
