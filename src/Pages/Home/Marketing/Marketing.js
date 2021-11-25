import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const Marketing = () => {
    return (
        <div  className="mb-5 mt-5">
                <Container>
                <Row>
                <Col sm={12} md={5}
                 className="d-flex justify-content-center align-items-center">
                    <div className="ms-5 ps-5">
                        <p>spaical offer</p>
                        <h6 style={{fontSize:'30px',fontWeight:"bolder"}}>The SUCCULENT GARDEN</h6>
                        <h1 style={{fontSize:'60px',fontWeight:"bolder"}}>GIFT BOXES</h1>
                        <p>From planter materials to style options, discover which planter is best for your space.</p>
                        <Button variant="outline-dark">Explore now</Button>
                    </div>
                </Col>
                    <Col xs ={12} md={7}>
                        <Image w-100  src="https://i.ibb.co/m6k29dW/banner.jpg" fluid></Image>
                    </Col>
                </Row>
                </Container>
        </div>
    );
};

export default Marketing;