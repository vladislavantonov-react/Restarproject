import React from 'react';
import {
    Modal,
    Button,
    Form,
    Col,
    Row,
    InputGroup
} from 'react-bootstrap';
import {FaCartPlus} from 'react-icons/fa';

import styles from './modal.module.scss';

export default function MyVerticallyCenteredModal({price, img, total, title, about, setHome, id, qty, ...props}) {

    const buttonHandler = (e) =>{
        setButton(e.target.value)

        if (e.target.value === e.target.value){
            setButtonError ( 'Товар закончился на складе')
        }
    }

    const handleButtonClick = (id, total) => {
        let cart = JSON.parse(localStorage.getItem('cart') )|| '';

        debugger
        if (cart.includes(id)) {
            let index = cart.indexOf(id)
            cart[index].total = total
         // cart[cart.indexOf(qty)] = qty - total
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {

            cart = [...cart, {id, total }]
            localStorage.setItem('cart', JSON.stringify([...cart, {id, total }]));
        }

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.body}>
                <h4> {title} </h4>
                <img className={styles.img}
                     src={img}
                />
                {about}
                {price}
                <Row>
                    <Col className={styles.control}>
                        <InputGroup className="mb-3">
                            <Form.Control onChange={handleChange} placeholder="Indicate"/>
                            <InputGroup.Append>
                                <Button
                                    onChange={buttonHandler}
                                    className={styles.price}
                                    onClick={() => handleButtonClick(id, total )}
                                >
                                    <FaCartPlus className={styles.plus}/>Add to Cart
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
