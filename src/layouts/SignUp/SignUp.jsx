import React, {useEffect, useState} from 'react';
import styles from './signup.module.scss'
import {Container, Form, Button} from "react-bootstrap";

const SignUp = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email false')
    const [passwordError, setPasswordError] = useState('Password false')
    const [formValid, setFormValid] = useState(false)


    useEffect( () => {
            if(emailError || passwordError){
                setFormValid(false)
            } else {
                setFormValid(true)
            }
        },
        [emailError,passwordError]
    )


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError("Неправильный адресс электронной почты")
    } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError("Пароль должен быть не менее трех символов и не более восьми")
            if(!e.target.value){
                setPasswordError("Не должен быть пустым")
            } else {
                setPasswordError('')
            }
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <h1 className={styles.head}>Create an account</h1>
            <Form className={styles.cont}>
                <form onSubmit={onSubmit}>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder='Enter your name'/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                    <Form.Control
                        onChange={e => emailHandler(e)}
                        value={email}
                        onBlur={e => blurHandler(e)}
                        name='email'
                        type="text"
                        placeholder='Enter your email'
                    />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <Form.Control
                        onChange={e => passwordHandler(e)}
                        value={password}
                        onBlur={e => blurHandler(e)}
                        name='password'
                        type="password"
                        placeholder='Enter your password'
                    />
                    </Form.Group>
                    <Button className={styles.reg} disabled={!formValid} type='submit'>Register</Button>
                </form>
            </Form>
        </Container>
    );
};
export default SignUp;
