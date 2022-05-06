import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-info my-5 text-center'>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control  type="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="info" className='d-block mx-auto w-50 my-2 fw-bold text-white' type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-3'>New to Carventory? <Link to='/register' className='text-primary pe-auto text-decoration-none ms-1'>Please Register</Link></p>
        </div>
    );
};

export default Login;