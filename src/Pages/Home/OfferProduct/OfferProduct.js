import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from 'react-router-dom';
import "./OfferProduct.css";

const OfferProduct = () => {
    const [OfferProduct, setOfferProduct] = useState([])
    useEffect(()=>{
        fetch('https://floating-wave-45302.herokuapp.com/allproduct')
        .then(res => res.json())
        .then(data => setOfferProduct(data,))
    },[]);

   
    return (
        <div  className="mb-5">
           <Container>
           {OfferProduct.length === 0 ? <div  className="d-flex justify-content-center h-100" >
                <Loader
                type="Watch"
                color="Black"
                height={500}
                width={100}
               
            />
            </div> : <div>
            <div className="container mt-5 p-5">
                <h1 className="neonText">
                    Discount 40% off
                </h1>
                <h2 class="neonText">Now through Aug. 1</h2> 

            </div>
              <Row xs={1} md={3} className="g-4 mt-5 ">
                {
                      OfferProduct.slice(3, 6).map(pd => (
                       <Col> 
                        <Card className="h-100 p-4 shadow-3">
                        
                            <Card.Img variant="top" src={pd.image}
                            className="img-fluid w-50 m-auto"/>
                            <Card.Body>
                            <Card.Title style={{color:'black', textDecoration:'none',}} className="text-center bolder">{pd.product_name}</Card.Title>
                            <Card.Text>
                               <h4 className="text-center "> $ {pd.price}</h4>
                            </Card.Text>
                            </Card.Body>
                            <Link to ={`/productPurches/${pd._id}`}>
                                
                            </Link>
                        </Card>
                </Col>
                    ))
                }
            </Row>
            </div>
            }
           </Container>
          
        </div>
    );
};

export default OfferProduct;