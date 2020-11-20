import React from "react";
import MyVerticallyCenteredModal from "../Modal/Modal";
import {Card, CardDeck,} from 'react-bootstrap';

import styles from "./card.module.scss";


export default function ImgMediaCard({title, price, img, about, qty, id, total, setHome}) {
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
                            <footer className={styles.footer}>
                                {title} {price}.00 $
                            </footer>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            <MyVerticallyCenteredModal
                setHome={setHome}
                show={modalShow}
                onHide={() => setModalShow(false)}
                total={total}
                title={title}
                price={price}
                about={about}
                img={img}
                id={id}
                qty={qty}
            />
        </>
    )
}
