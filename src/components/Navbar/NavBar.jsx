import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NavBar = () => {

    const history = useHistory();

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand style={{fontWeight: 600, color: 'gray', fontSize: '25px', letterSpacing: '1px'}}>Dream Abode</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Nav.Link onClick={() => history.push('/')}>Home</Nav.Link>
                        <Nav.Link onClick={() => history.push('/user')}>
                            User Account
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;