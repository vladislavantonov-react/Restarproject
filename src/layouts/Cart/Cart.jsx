import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import styles from "./cart.module.scss"

const Cart = ({data}) => {
    let total = 0
    return(
        <Container>
            <h1>Cart</h1>
            <Form>
                {data.map(d => {
                    total += d.price
                    return <>
                        <span>{d.title}</span>
                        <span className={styles.about}>{d.about}</span>
                        <img src={d.img} className={styles.img}/>
                        <span>{d.id}</span>
                    </>
                })}
                <footer className={styles.footer}>
                <Button variant="dark"> Sub total:{total}$ </Button>
                </footer>
            </Form>
        </Container>
    );
};
export default Cart;