import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('https://floating-wave-45302.herokuapp.com/allreview')
        .then(res => res.json())
        .then(data => setReview(data))
    }
    ,[])
    return (
        <Container className=" mb-5 mt-5" >
                <h1 className= "text-center mt-5">Our Happy Client Review</h1>
            <Row xs={12} md={4} className="g-2 mt-5">
                {
                    review.map(rv => (
                        <Col>
                            <Card >
                                <Card.Body>
                                <Card.Text style=
                                {{fontSize:'18px', color:'black'}}>
                                    <i style={{marginRight:"10px"}} class="fas fa-quote-left"></i>
                                    {
                                        rv.review
                                    }
                                    <i style={{marginLeft:"10px"}} class="fas fa-quote-right"></i>
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer className="w-100" style=
                                {{marginLeft:'auto',backgroundColor:"white"}} className="text-dark bold"><i class="fas fa-user-ninja"></i> {rv.email}</Card.Footer>
                            </Card>
                            </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Review;