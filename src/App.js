import React from "react";
import Allusers from "./components/Allusers";
import Adduser from "./components/Adduser";
import Navbar from "./components/Navbar";
import EditUser from "./components/EditUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Allusers} />
          <Route path="/adduser" exact component={Adduser} />
          <Route path="/edituser/:id" exact component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
