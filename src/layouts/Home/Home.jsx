import React from "react";
import Header from '../../components/Header/Header';
import ImgMediaCard from "../../components/Card/Card";
import lampOne from '../../assets/image/lampOne.png'
import lampTwo from '../../assets/image/lampTwo.png'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
    console.log('Home')
    let arr = [
        {
            title:'Gold',
            price:'$243.00',
            img: lampOne,
        },
        {
            title:'Gold',
            price:'$243.00',
            img: lampTwo,
        }

    ]
    return(
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Header/>
                    {arr.map((item) => (
                        <Col lg={5}>
                            <ImgMediaCard title={item.title} price={item.price} img={item.img}/>

                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}
export default Home
