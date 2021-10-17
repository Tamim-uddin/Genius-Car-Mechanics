
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
    const {user, logout} = UseAuth();
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
            { user?.email ?
                 <Button onClick={logout} variant="light">Logout</Button> :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>}      
            <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
        </Navbar.Collapse>
    
    </Container>
  </Navbar>
</>
    );
};

export default Header;