import React from "react";
import MyVerticallyCenteredModal from "../Modal/Modal";
import styles from "./card.module.scss";
import {
    Card,
    CardDeck,
    Button,
} from 'react-bootstrap';



export default function ImgMediaCard({title, price, img, about, setHome}) {
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
                title={title}
                price={price}
                about={about}
                img={img}
            />
        </>
    )
}

