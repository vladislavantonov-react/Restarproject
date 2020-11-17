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
            <Route path="/sign">
              <SignIn />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

// function () {
//   return (
//       <div>
//         <h2>About</h2>
//       </div>
//   );
// }

function Dashboard() {
   return (
       <div>
         <h2></h2>
       </div>
   );
 }

// function Cart() {
//   return (
//       <div>
//         <h2>Cart</h2>
//       </div>
//   );
// }