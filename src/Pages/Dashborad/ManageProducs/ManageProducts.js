import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch("https://floating-wave-45302.herokuapp.com/allproduct")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);

      const handleDelete = (id) => {
        alert('are you sure want to delete')
        fetch(`https://floating-wave-45302.herokuapp.com/deleteProduct/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setControl(!control);
            } else {
              setControl(false);
            }
          });
        console.log(id);
      };
    return (
        <div>
            <div className="container mt-5">
                    <h1 className="text-center">Manage All Product</h1>
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
                            <Button onClick={() => handleDelete(pd._id)} className="m-auto w-100" variant = "danger">Delete Item</Button>
                            </Card.Footer>
                        </Card>
                </Col>
                       ))
                    }  
                    </Row>
        </div>
        </div>
    );
};

export default ManageProducts;