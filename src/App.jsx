import React from "react";
import Home from '../src/layouts/Home/Home'
import NavbarNew from "./components/Navbar/Navbar";
import SignUp from "./layouts/SignUp/SignUp";
import SignIn from "./layouts/SignIn/SignIn"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div>
          <NavbarNew />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/sign_in">
              <SignIn />
            </Route>
            <Route path="/cart">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

    function Dashboard() {
       return (
           <div>
             <h2></h2>
           </div>
       );
     }
