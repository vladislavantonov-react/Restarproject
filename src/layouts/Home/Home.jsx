import React from "react";
import Header from '../../components/Header/Header';
import ImgMediaCard from "../../components/Card/Card";
import lampOne from '../../assets/image/lampOne.png'
import lampTwo from '../../assets/image/lampTwo.png'
import lampThree from '../../assets/image/lampThree.png'
import lampFour from '../../assets/image/lampFour.png'
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
        },
        {
            title:'Gold',
            price:'$243.00',
            img: lampOne,
        },
        {
            title:'Gold',
            price:'$243.00',
            img: lampThree,
        },
        {
            title:'Gold',
            price:'$243.00',
            img: lampFour,
        }

    ]
    return(
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Header/>
                    <Row className="justify-content-space-between d-flex">
                    {arr.map((item) => (
                        <Col lg={6} >
                            <ImgMediaCard title={item.title} price={item.price} img={item.img}/>
                        </Col>
                    ))}
                    </Row>
                </Row>
            </Container>

        </div>
    )
}
export default Home
