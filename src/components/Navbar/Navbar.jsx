import React from 'react';
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const NavbarNew = () => {

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                        <NavLink to="/">Start Store  </NavLink>
                    <div className="">
                            <NavLink className="p-2" to="/dashboard">Sign up</NavLink>
                            <NavLink className="p-2" to="/about">Sign in</NavLink>
                            <NavLink className="p-2" to="/cart">Cart</NavLink>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarNew;
