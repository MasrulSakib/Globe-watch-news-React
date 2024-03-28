import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftItems from '../LeftItems/LeftItems';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className='mb-4'>
            <Container>
                <Navbar.Brand><Link className='text-decoration-none' to='/'><h4>Globe Watch News</h4></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <div className='d-lg-none d-block'>
                        <LeftItems></LeftItems>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;