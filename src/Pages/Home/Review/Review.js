import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('https://floating-wave-45302.herokuapp.com/allreview')
        .then(res => res.json())
        .then(data => setReview(data))
    }
    ,[])
    return (
        <div className="container mb-5 mt-5" >
                <h1 className= "text-center mt-5">Our Happy Client Review</h1>
            <Row xs={12} md={4} className="g-2 mt-5">
                {
                    review.map(rv => (
                        <Col>
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Header className="text-success">{rv.email}</Card.Header>
                                <Card.Body>
                                <Card.Text>
                                    {
                                        rv.review
                                    }
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                    ))
                }
         </Row>
        </div>
    );
};

export default Review;