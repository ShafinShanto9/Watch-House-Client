import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import "./Header.css";

const Header = () => {
    return (  
            <Container classname="mb-5 mt-5 " >
            <Row>
                <Col sm={12} md={6}
                 className="d-flex justify-content-center align-items-center">
                    <div>
                        <h6 style={{fontSize:'30px',fontWeight:"bolder"}}>The Stone Series</h6>
                        <h1 style={{fontSize:'60px',fontWeight:"bolder"}}>The Premium Edition</h1>
                        <p>From planter materials to style options, discover which planter is best for your space.</p>
                        <Button style={{color:'white', fontWeight:"bolder"}} variant="dark">Explore Now </Button>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <Image w-100 src = "https://i.ibb.co/w4svLH8/NOMOS-Glash-tte.jpg" fluid></Image>     
                </Col>
            </Row>
            </Container>
        
    );
};

export default Header;