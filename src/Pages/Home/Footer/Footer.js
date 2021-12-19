import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
      <Container fluid>
      <Row className = ' text-center align-items-center justify-content-center bg-dark mt-5 p-3 text-white'>
          <Col xs = {12} md = {5}>
              <div>
                  <h2>About Us</h2>
                  <p>Energistically reintermediate worldwide interfaces vis-a-vis emerging integrate leadership skills.</p>
                  <p>693 2325 12456</p>
              </div>
          </Col>
          <Col xs = {12} md = {5}>
              <div>
                  <h2>Leave Us Message</h2>
                  <Form>
                          <Form.Group className=" w-75 mx-auto" controlId="exampleForm.ControlInput1">
                              <Form.Label>Enter Email address</Form.Label>
                              <Form.Control type="email" placeholder="name@example.com" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                              <Form.Label></Form.Label>
                              <Form.Control as="textarea" rows={3} 
                              placeholder = "your Message"
                              />
                          </Form.Group>
                          </Form>
                          <button className = "btn btn btn-success">Leave Message</button>
              </div>
          </Col>
      </Row>
  </Container>
    );
};

export default Footer;