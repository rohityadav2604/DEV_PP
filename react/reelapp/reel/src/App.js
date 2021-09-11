import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import React from 'react';

import Login from './components/Login';
import Home from './components/Home';

import AuthProvider from './Authprovider.jsx';
let App =()=>{
  return (
    <React.Fragment>
      <AuthProvider>


      <Router>
        <Switch>
          <Route exact path="/login">

            <Login/>

          </Route>
          <Route exact Path="/">

            <Home/>

          </Route>
        </Switch>
      
      </Router>

      </AuthProvider>
      
    </React.Fragment>
  );
}

export default App;
