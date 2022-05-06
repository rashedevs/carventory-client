import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const handleLoginSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email,password)
        event.target.reset()
    }
    return (
        <div className='container w-50 mx-auto' style={{ height: "100vh" }}>
            <h2 className='text-primary my-4 text-center'>Please Login</h2>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control  type="email" name="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" className='d-block mx-auto w-50 my-2 fw-bold text-white rounded' type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-3'>New to Carventory? <Link to='/register' className='text-primary pe-auto text-decoration-none ms-1'>Please Register</Link></p>
        </div>
    );
};

export default Login;