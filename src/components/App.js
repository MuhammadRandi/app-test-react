import React from "react";
import Main from "./Main";
import MenuProps from "./menu";
import Project from "./Project";
import Resume from "./Resume";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
  <Router>
    <div className="App">     
     <MenuProps />
     <Route path="/main" exact component={Main} />
     <Route path="/project" component={Project} />
     <Route path="/resume" component={Resume} ></Route>
    </div>
  </Router>
  );
}

export default App;
