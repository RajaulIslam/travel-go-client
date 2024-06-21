import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const Register = () => {
    return (
        <div className='my-5 py-4'>
            <h2>Please Sign UP</h2>
            <p>SignUp with Email & Password</p>
           
            <Form className='w-50 mx-auto'>
                <Row>
                    <Col
                        className="text-start">
                        <Form.Label htmlFor="name" visuallyHidden>
                            Your Name
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            </InputGroup.Text>
                            <FormControl
                                required
                                onBlur=''
                                type="text"
                                autoComplete="current-name"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-start">
                        <Form.Label htmlFor="email" visuallyHidden>
                            Your Email Address
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            </InputGroup.Text>
                            <FormControl
                                onBlur=''
                                type="email"
                                autoComplete="current-email"
                                id="email"
                                placeholder="Enter your email address"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="text-start">
                        <Form.Label htmlFor="password" visuallyHidden>
                            Your Password
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                            </InputGroup.Text>
                            <FormControl
                                onBlur=''

                                type="password"
                                autoComplete="current-password"
                                id="password"
                                placeholder="Enter your password"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <button type="submit" className="btn btn-primary mt-2 px-5">
                    Sign up
                </button>
            </Form>
        </div>
    );
};

export default Register;