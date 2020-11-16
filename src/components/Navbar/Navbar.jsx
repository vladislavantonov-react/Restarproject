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
                        <NavLink to="/" activeClassName={styles.Active}>Starter Store  </NavLink>
                        <div style={{padding:'35px'}}>
                            <NavLink  to="/signup" activeClassName={styles.Active}>Sign up</NavLink>
                            <NavLink  to="/sign" activeClassName={styles.Active}>Sign in</NavLink>
                            <NavLink  to="/cart" activeClassName={styles.Active}><FaShoppingCart className={styles.Sss}/>Cart(0)</NavLink>
                        </div>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarNew;
