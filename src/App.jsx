import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from '../src/layouts/Home/Home'
import NavbarNew from "./components/Navbar/Navbar";
import SignUp from "./layouts/SignUp/SignUp";
import SignIn from "./layouts/SignIn/SignIn"
import Cart from "./layouts/Cart/Cart";


export default function App() {
  const [cart, setCart] = React.useState([]);

  return (
      <Router>
        <div>
          <NavbarNew />
          <Switch>
            <Route exact path="/">
              <Home setHome={setCart}/>
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/sign_in">
              <SignIn />
            </Route>
            <Route path="/cart">
              <Cart data={cart}/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

