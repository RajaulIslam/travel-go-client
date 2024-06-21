import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import logo from "../../images/logo.jpg";
const Header = () => {
    const { allContext } = useAuth();
    const { user, logOut } = allContext;
    return (

        <div >
            <Navbar className='header' bg="" expand="lg">
                <Container>
                    <Navbar.Brand className='text-white' as={NavLink} to='/home'>
                        <img
                            alt=""
                            src={logo}
                            width="150"
                            height="50"
                            className="d-inline-block align-top"
                        />{''}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-white' as={NavLink} to='/home'>Home</Nav.Link>
                            <Nav.Link className='text-white' as={NavLink} to='/about'>About</Nav.Link>




                            <>
                                {
                                    user.displayName ?
                                        <>
                                            <Nav.Link className='text-white' onClick={logOut}> hi! {user.displayName} {" "}Logout</Nav.Link>
                                            <Nav.Link className='text-white' as={NavLink} to='/myOrder'>My Order</Nav.Link>
                                            <Nav.Link className='text-white' as={NavLink} to='/allOrder'>All Order</Nav.Link>
                                            <Nav.Link className='text-white' as={NavLink} to='/addElement'>Add Service</Nav.Link>

                                        </>




                                        :


                                        <>

                                            <Nav.Link className='text-white' as={NavLink} to='/register'>Register</Nav.Link>
                                            <Nav.Link className='text-white' as={NavLink} to='/login'>Login</Nav.Link>



                                        </>
                                }
                            </>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;