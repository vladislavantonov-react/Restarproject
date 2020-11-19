import React from "react";
import Header from '../../components/Header/Header';
import ImgMediaCard from "../../components/Card/Card";
import lampOne from '../../assets/image/lampOne.png';
import lampTwo from '../../assets/image/lampTwo.png';
import lampThree from '../../assets/image/lampThree.png';
import lampFour from '../../assets/image/lampFour.png';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
    console.log('Home')
    let arr = [
        {
            title:'Gold',
            price:'$243.00',
            img: lampTwo,
            about:'...',
        },
        {
            title:'Blue Desk',
            price:'$253.00',
            img: lampOne,
            about:'...',
        },
        {
            title:'Soft',
            price:'$270.00',
            img: lampThree,
            about:'...',
        },
        {
            title:'Triangle',
            price:'$223.00',
            img: lampFour,
            about:'...',
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
                            <ImgMediaCard title={item.title} price={item.price} img={item.img} about={item.about}/>
                        </Col>
                    ))}
                    </Row>
                </Row>
            </Container>

        </div>
    )
}
export default Home
