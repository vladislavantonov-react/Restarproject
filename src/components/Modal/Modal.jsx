import React from 'react';
import styles from './modal.module.scss';
import {Modal, Button,Form} from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {FaCartPlus} from 'react-icons/fa';

export default function MyVerticallyCenteredModal({price,img,title,about, setHome, ...props}) {
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
                            <Form.Control placeholder="Indicate" />
                            <Button
                                className={styles.price}
                                onClick={() => setHome(prev => [...prev, {price, img, title, about}])}
                            >
                                <FaCartPlus className={styles.plus}/>Add to Cart
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
}
