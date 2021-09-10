import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import React from 'react';

import Login from './components/Login';
import Home from './components/Home';
let App =()=>{
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
