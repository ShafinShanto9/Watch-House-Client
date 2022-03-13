import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import "./Navigation.css";
const Navigation = () => {
    const {user, logOut} = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#333333'}}>
                <Container>
                <Navbar.Brand style={{color:'white'}} to="/home">Watch-House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto me-auto">
                    <NavLink className="navfixed"  to="/home">Home</NavLink>
                    <NavLink className="navfixed"  to="/allproducts">All Products</NavLink>
                    {user?.email && <NavLink className="navfixed" to="/dashboard">Dashboard</NavLink>}
                    <NavLink className="navfixed" to="/contact">Contact</NavLink>
                    </Nav>
                    <Nav>
                    {user?.email  ? <Link to="/login">
                        <Button onClick={logOut} variant = "dark">LogOut</Button>
                    </Link>
                    : <Link to="/login">
                        <Button variant = "dark">Log in</Button>
                    </Link>
                    
                    }
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;