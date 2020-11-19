import React from "react";
import Header from '../../components/Header/Header';
import ImgMediaCard from "../../components/Card/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import lampOne from '../../assets/image/lampOne.png';
import lampTwo from '../../assets/image/lampTwo.png';
import lampThree from '../../assets/image/lampThree.png';
import lampFour from '../../assets/image/lampFour.png';

const Home = ({setHome}) => {
    console.log('Home')
    let arr = [
        {
            id: 1,
            title:'Gold',
            price:243,
            img: lampTwo,
            about:'...',
            qty: 5,
        },
        {
            id: 2,
            title:'Blue Desk',
            price:253,
            img: lampOne,
            about:'...',
            qty: 5,
        },
        {
            id: 3,
            number: '3',
            title:'Soft',
            price:270,
            img: lampThree,
            about:'...',
            qty: 5,

        },
        {
            id: 4,
            title: 'Triangle',
            price: 223,
            img: lampFour,
            about: '...',
            qty: 5,
        }

    ]
    return(
         <div>
            <Container>
                <Row className="justify-content-center">
                    <Header/>
                    <Row className="justify-content-space-between d-flex">
                    {arr.map((item, key) => (
                        <Col lg={6} key={key}>
                            <ImgMediaCard
                                setHome={setHome}
                                number={item.number}
                                title={item.title}
                                price={item.price}
                                about={item.about}
                                img={item.img}
                                qty={item.qty}
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
