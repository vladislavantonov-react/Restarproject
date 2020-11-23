import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Header from '../../components/Header/Header';
import ImgMediaCard from "../../components/Card/Card";

import lampOne from '../../assets/image/lampOne.png';
import lampTwo from '../../assets/image/lampTwo.png';
import lampThree from '../../assets/image/lampThree.png';
import lampFour from '../../assets/image/lampFour.png';

const Home = ({setHome}) => {
    console.log('Home')
    let arr = [
        {
            id: 1,
            title: 'Gold',
            price: 243,
            img: lampTwo,
            about: 'Some more information goes here...',
            qty: 5000000000,
        },

        {
            id: 2,
            title: 'Blue Desk',
            price: 253,
            img: lampOne,
            about: 'Some more information goes here...',
            qty: 60000000000,
        },

        {
            id: 3,
            title: 'Soft',
            price: 270,
            img: lampThree,
            about: 'Some more information goes here...',
            qty: 400000000000,
        },

        {
            id: 4,
            title: 'Triangle',
            price: 223,
            img: lampFour,
            about: 'Some more information goes here...',
            qty: 100000000000,
        }
    ]

    useEffect(() => {
        localStorage.setItem('productsList', JSON.stringify(arr))
    })

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Header/>
                    <Row className="justify-content-space-between d-flex">
                    {arr.map((item, key) => (
                        <Col lg={6} key={key}>
                            <ImgMediaCard
                                setHome={setHome}
                                title={item.title}
                                price={item.price}
                                about={item.about}
                                img={item.img}
                                qty={item.qty}
                                id={item.id}
                            />
                        </Col>
                    ))}
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default Home
