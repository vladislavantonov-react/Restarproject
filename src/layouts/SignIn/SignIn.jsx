import React from 'react';
import {Container, Form, Button,} from "react-bootstrap";
import styles from "../SignUp/signup.module.scss";

const SignIn = () => {


    return (
        <Container>
            <h1 className={styles.Head}>Login to your account</h1>
            <Form className={styles.Cont}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className={styles.Reg} type='submit'>Register</Button>
            </Form>
        </Container>
    );
};
export default SignIn;