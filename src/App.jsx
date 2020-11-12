import React from "react";
import Home from '../src/layouts/Home/Home'
import NavbarNew from "./components/Navbar/Navbar";
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function About() {
  return (
      <div>
        <h2>About</h2>
      </div>
  );
}

function Dashboard() {
  return (
      <div>
        <h2>Dashboard</h2>
      </div>
  );
}

function Cart() {
  return (
      <div>
        <h2>Cart</h2>
      </div>
  );
}