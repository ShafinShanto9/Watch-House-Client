import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from 'react-router-dom';
import Navigation from '../../Home/Navigation/Navigation';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [filterItem, setFilterItem] = useState([])
    useEffect(() => {
        fetch("https://floating-wave-45302.herokuapp.com/allproduct")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);

      const lessFilter =()=>{
        const itemFound = products.filter(details => details.price <= 100 )
        setFilterItem(itemFound)
      }
      const midFilter =()=>{
        const itemFound = products.filter(details => details.price > 100 && details.price <= 300 )
        setFilterItem(itemFound)
      }
      const highFilter =()=>{
        const itemFound = products.filter(details => details.price > 301   )
        setFilterItem(itemFound)
      }
    return (
        <>
        <Navigation></Navigation>
                <div className="container mt-5">
                {products.length === 0 ? <div  className="d-flex justify-content-center h-100" >
                <Loader
                type="Watch"
                color="Black"
                height={500}
                width={100}
               
            />
            </div> :( <div>
                <h1 className="text-center">Show All Product</h1>
                    <Row>    
                        <Col md={8}>
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
                        </Col>
                        <Col md={4}>
                            <div style={{ position:'relative', margin:'20px', width:'100%'}}>
                                <h1>product filter</h1>
                                <button style={{backgroundColor:'black', color:'white', margin:'5px'}} onClick={lessFilter} >Lower Range Watch
                                </button>
                                <button style={{backgroundColor:'black', color:'white', margin:'5px'}} onClick={midFilter} >Mid Range Watch
                                </button>
                                <button style={{backgroundColor:'black', color:'white', margin:'5px'}} onClick={highFilter} >Higher Range Watch
                                </button>
                                
                             
                             {filterItem ? <Row xs={1} md={2} className="g-4 mt-5">
                        {
                            filterItem?.map((item) => (
                        <Col>
                        <Card className="shadow-3 w-100">
                            <Card.Img variant="top" src={item.image} className="img-fluid w-50 m-auto"/>
                            <Card.Body>
                            <Card.Title className="text-center bolder">{item.product_name}</Card.Title>
                            <Card.Text>
                               <h4 className="text-center"> $ {item.price}</h4>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to = {`/productPurches/${item._id}`}>
                            <Button className="m-auto w-100" variant = "dark">Purches Now</Button>
                            </Link>
                            </Card.Footer>
                        </Card>
                </Col>
                       ))
                    }  
                    </Row> : <div></div> }
                    </div>
                        </Col>
                    </Row>
            </div>
            )}
        </div>
        </>
    );
};

export default AllProducts;