import React from "react";
import styles from "./card.module.scss"

import {
    Card,
    CardDeck,
    Button,

} from 'react-bootstrap';

export default function ImgMediaCard({title, price, img}) {
    return (
        <div onClick={() => alert('CLICK')}>
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
    );
}
