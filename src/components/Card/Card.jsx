import React from "react";
import {
    Card,
    CardDeck,
    Button,

} from 'react-bootstrap';

export default function ImgMediaCard({title, price, img}) {
    return (
<div onClick={()=>alert('CLICK')}>
            <CardDeck>
                    <Card>
                    <Card.Body>
                        <Card.Img
                            variant="top"
                            src={img}
                        />
                    </Card.Body>
                    <Button variant="light" size="lg" block>{title} {price}</Button>
                    </Card>

            </CardDeck>
</div>
    );
}
