import React from 'react';
import {
    Button,
    Container,
    Form
} from "react-bootstrap";

import styles from "./cart.module.scss"

const Cart = ({data}) => {
    let total = data.reduce(function (sum, current) {
        console.log(current)
        return sum + current.price;
    }, 0);
    console.log(total)
    // const listOfNumbers = {}
    // console.log(data)
    // const unique = data.filter((el, idx, arr) => {
    //     console.log(el)
    //     if (arr.findIndex(lamp => lamp.id === el.id) === idx) {
    //         listOfNumbers[el.id] = 1
    //         return true
    //     }
    //     listOfNumbers[el.id] += 1
    //     return false
    // })
    // console.log(unique, listOfNumbers, 'listOfNumbers')
    const array1 = [];


    return (
        <Container>
            <h1>Cart</h1>
            <Form>
                {data.map(d => {
                    total += d.price
                    return <>
                        <span>{d.title}</span>
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