import React from "react";
import Main from "./Main";
import MenuProps from "./Menu";
import Project from "./Project";
import Resume from "./Resume";

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {
  return (
  <Router>
       
     <MenuProps />
     <Route path="/main" exact component={Main} />
     <Route path="/project" component={Project} />
     <Route path="/resume" component={Resume} ></Route>
  </Router>
  );
}

export default App;
