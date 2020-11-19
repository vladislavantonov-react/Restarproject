import React from "react";
import styles from "./card.module.scss";
import {
    Card,
    CardDeck,
    Button,
} from 'react-bootstrap';

import MyVerticallyCenteredModal from "../Modal/Modal";

export default function ImgMediaCard({title, price, img, about}) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div onClick={() => setModalShow(true)}>
                <CardDeck className={styles.card_deck}>
                    <Card className={styles.card}>
                        <Card.Body>
                            <Card.Img
                                variant="top"
                                src={img}
                            />
                            <Button variant="light" size="lg" block>{title} {price}</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={title}
                price={price}
                about={about}
                img={img}
            />
        </>
    )
}

