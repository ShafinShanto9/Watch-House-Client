import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../Home/Navigation/Navigation';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://floating-wave-45302.herokuapp.com/allproduct")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
      console.log(products)
    return (
        <>
        <Navigation></Navigation>
                <div className="container mt-5">
                    <h1 className="text-center">Show All Product</h1>
                    <Row xs={1} md={3} className="g-4 mt-5">    
                    {
                       products.map((pd) => (
                        <Col>
                        <Card className="h-100 p-4 shadow-3">
                            <Card.Img variant="top" src={pd.image} className="img-fluid w-50 m-auto"/>
                            <Card.Body>
                            <Card.Title className="text-center bolder">{pd.product_name}</Card.Title>
                            <Card.Text>
                               <h4 className="text-center"> $ {pd.price}</h4>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to = {`/productPurches/${pd._id}`}>
                            <Button className="m-auto w-100" variant = "dark">Purches Now</Button>
                            </Link>
                            </Card.Footer>
                        </Card>
                </Col>
                       ))
                    }  
                    </Row>
        </div>
        </>
    );
};

export default AllProducts;