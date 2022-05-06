import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='container w-50 mx-auto'>
                <h2 className='text-danger my-5 text-center'>Please Register</h2>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' type="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password'  type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Control name='confirmPassword'  type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button variant="danger" type="submit" className='d-block mx-auto w-50 my-3 fw-bold'>
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;