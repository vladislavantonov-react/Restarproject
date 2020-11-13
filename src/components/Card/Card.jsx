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
            <CardDeck className={styles.Card}>
                <Card style={{borderRadius: '10px'}}>
                    <Card.Body  style={{padding:'0px'}}>
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
