import React from 'react';
import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import { FaShoppingCart, FaFire } from "react-icons/fa";
import styles from "./navbar.module.scss"

const NavbarNew = () => {

    return (
        <div className={styles.navbar}>
            <Navbar expand="lg">
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navbar__collaps}>
                    <div className={styles.linkStarter}>
                        <NavLink exact to="/" activeClassName={styles.active}><FaFire className={styles.start_icon}/>Starter Store  </NavLink>
                    </div>
                        <div className={styles.linkWrapper}>
                            <NavLink  to="/signup"  activeClassName={styles.active}>Sign up</NavLink>
                            <NavLink  to="/sign_in" activeClassName={styles.active}>Sign in</NavLink>
                            <NavLink  to="/cart" activeClassName={styles.active}><FaShoppingCart className={styles.cart_icon}/>Cart(0)</NavLink>
                        </div>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarNew;
