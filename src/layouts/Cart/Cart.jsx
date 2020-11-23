import React from 'react';
import {Button, Container, Form} from "react-bootstrap";

import styles from "./cart.module.scss"
import {FaTimes} from "react-icons/fa";

const Cart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let subTotal = cart.reduce(
        (accumulator, currentValue) => {
            return accumulator + (currentValue.total * currentValue.price)
        }, 0);

    const handleButtonClick = (id) => {
        let addEl = cart.findIndex((el) => el.id === id)
        cart.splice(addEl, 1)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <Container>
            <h1></h1>
            <Form>
                {cart.map(d => {
                    return <>
                        <div className={styles.content}>
                            <img src={d.img} className={styles.img}/>
                            <div className={styles.content2}>
                                <span className={styles.title}>{d.title}</span>
                                <span className={styles.totalprice}>{d.total}x ${d.price}</span>
                                <span className={styles.about}>{d.about}</span>
                                <span >{d.qty}</span>
                                <span>{d.id}</span>
                            </div>
                            <Button
                                variant="link"
                                onClick={() => handleButtonClick()}
                                className={styles.close}
                            ><FaTimes className={styles.icons}/>
                            </Button>
                        </div>
                    </>
                })}
                <div className={styles.footer}>
                <footer className={styles.box}>
                        <span className={styles.subtotal}>Sub total: ${subTotal}</span>
                        <Button variant="dark" className={styles.button}> Check out </Button>
                </footer>
                </div>
            </Form>
        </Container>
    );
};
export default Cart;