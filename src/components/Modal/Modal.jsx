import React, {useState} from 'react';
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
    const [changeError, setChangeError] = useState(false)
    const [value, setValue] = useState(null)

    const buttonHandler = (e) => {
        setChangeError(e.target.value)

        if (!e.target.value < qty) {
            setChangeError('Недостаточно товаров на складе')
            if (e.target.value === e.target.value) {
                setChangeError('Товар закончился на складе')
            } else {
                setChangeError('Товар добавлен в корзину')
            }
        }
    }

    const handleChange = (e) => {
        setValue(Number(e.target.value))
    }

    const handleButtonClick = (id, total) => {
        // debugger

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let prodList = JSON.parse(localStorage.getItem('productsList')) || [];

        let addEl = cart.findIndex((el) => el.id === id)

        if (cart.length) {
            if (addEl !== -1) {

                let delEl = prodList.findIndex((el) => el.id === id)

                debugger
                prodList.splice(delEl, 1, {
                    ...prodList[delEl],
                    id: prodList[delEl].id,
                    qty: prodList[delEl].qty - total
                })

                cart.splice(addEl, 1, {
                    ...cart[addEl],
                    total: cart[addEl].total + total
                })

                localStorage.setItem('cart', JSON.stringify(cart));
                localStorage.setItem('productsList', JSON.stringify(prodList));
            } else {
                cart = [...cart, {id, total, price, img, about, title, qty}]

                localStorage.setItem('cart', JSON.stringify(cart));
            }
        } else {

            cart = [...cart, {id, total, price, img, about, title, qty}]

            localStorage.setItem('cart', JSON.stringify(cart));
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
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.body}>
                <img className={styles.img}
                     src={img}
                />
                {about}
                {price}
                <Row>
                    <Col className={styles.control}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                onChange={handleChange}
                                placeholder="Recipient"
                                aria-label="Recipient"
                                aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <Button
                                    onChange={buttonHandler}
                                    className={styles.price}
                                    onClick={() => handleButtonClick(id, value, img, qty, title, about)}
                                >
                                    <FaCartPlus className={styles.plus}/>Add to Cart
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Modal.Body>
            {/*<Modal.Footer>*/}
                {/*<Button onClick={props.onHide}>Close</Button>*/}
            {/*</Modal.Footer>*/}
        </Modal>
    );
}
