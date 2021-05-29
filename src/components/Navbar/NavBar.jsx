import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getUserInfo } from '../../app/actions/userActions';
import { logoutUser } from '../Login/loginManager';

const NavBar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.userReducer.userInfo,
    }));

    const handleLogOut = () => {
        logoutUser()
            .then((data) => {
                if (data.error) {
                    alert(data.error.message);
                } else {
                    console.log(data.message);
                    dispatch(getUserInfo({}));
                }
            })
    }

    const history = useHistory();

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand style={{ fontWeight: 600, color: 'gray', fontSize: '25px', letterSpacing: '1px' }}>Dream Abode</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Nav.Link onClick={() => history.push('/')}>Home</Nav.Link>
                        <Nav.Link onClick={() => history.push('/user-account')}>
                            User Account
                        </Nav.Link>
                        {
                            user?.email ? (<Nav.Link style={{ fontWeight: 'bold', letterSpacing: '1px' }} onClick={handleLogOut}>
                                Log Out
                            </Nav.Link>) : (<Nav.Link style={{ fontWeight: 'bold', letterSpacing: '1px' }} onClick={() => history.push('/login')}>
                                Log In
                            </Nav.Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;