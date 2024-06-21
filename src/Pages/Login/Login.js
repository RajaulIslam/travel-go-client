import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hook/useAuth';
import useFirebase from '../../Hook/useFirebase';
import google from "../../images/google.jfif";


const Login = () => {
    const history = useHistory()
    const location = useLocation();
    const redirect = location?.state?.from || '/home'
    const { allContext, elements } = useAuth();
    const { signInWithGoogle,
        user,
        setUser,
        error,
        setError,
        setIsLoading } = allContext;





    return (
        <div>
            <h2>Please Login</h2>
            <p>Login with Email & Password</p>
            <p>{error}</p>
            <Row className='w-50 mx-auto'>
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
                <Row className="mt-2 w-50 mx-auto">
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
                <button type="submit" className="btn btn-primary mt-2">
                    Log In
                </button> <br />
                <p>Or click to Login with</p>
            <img className='img-fluid' onClick={

                () => signInWithGoogle()
                    .then(result => {
                        setIsLoading(true);
                        console.log(result.user);
                        history.push(redirect);
                        setUser(result.user)

                    })
                    .catch(error => {
                        setError(error.message)

                    })
                    .then(() => {
                        setIsLoading(false)
                    })


            }

                src={google} alt=""







            />
            <p>{error}</p>
            {/* <button className="btn btn-primary mt-2 mx-3">Google Signin</button> */}
        </div>
    );
};

export default Login;