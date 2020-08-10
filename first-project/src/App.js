import React from 'react';
import './style/App.css';

import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Contact from './component/Pages/Contact';
import Error from './component/Pages/Error';
import NavBar from './component/layout/NavBar';

import 'bootstrap/dist/css/bootstrap.css';
// import'../node_module/bootstrap/dist/css/bootstrap-theme.css';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './component/UserAction/AddUser';
import EditUser from './component/UserAction/EditUser';
import ViewUser from './component/UserAction/ViewUser';

function App() {
  return (
    <div >
      {/* <p>Dinesh</p> */}
      <Router>
        <div>
          <NavBar/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/users/addUser" component={AddUser}/>
                <Route exact path="/users/editUser/:id" component={EditUser}/>
                <Route exact path="/users/viewUser/:id" component={ViewUser}/>
                {/* Error route should be at the last other wise other routing will  not work and it will show error page always */}
                <Route component={Error}/>
              </Switch>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
