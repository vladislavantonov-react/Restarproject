import React from 'react';
import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./navbar.module.scss"

const NavbarNew = () => {

    return (
        <div>
            <Navbar bg="light" expand="lg" variant="light">
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                        <NavLink to="/" activeClassName={styles.Ss}>Starter Store  </NavLink>
                        <div style={{padding:'35px'}}>
                            <NavLink className={styles.Ss} to="/dashboard" >Sign up</NavLink>
                            <NavLink className={styles.Ss} to="/about">Sign in</NavLink>
                            <NavLink className={styles.Ss} to="/cart"><FaShoppingCart className={styles.Sss}/>Cart(0)</NavLink>
                        </div>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarNew;
