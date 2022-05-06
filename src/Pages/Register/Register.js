import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true })

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    })
    if (loading) {
        return <Loading></Loading>
    }
    let errorContainer;
    if (error) {
        errorContainer = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleRegisterSubmit=async(event)=>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword=event.target.confirmPassword.value

        if (password !== confirmPassword) {
            toast('Password did not match')
            event.target.reset()
            return;
        }
        await createUserWithEmailAndPassword(email,password)
        navigate('/home')
        event.target.reset()
    }
    return (
        <div className='container w-50 mx-auto'style={{ height: "100vh" }}>
                <h2 className='text-danger my-4 text-center'>Please Register</h2>
                <Form onSubmit={handleRegisterSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' type="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password'  type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Control name='confirmPassword'  type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button variant="danger" type="submit" className='d-block mx-auto w-50 my-3 fw-bold rounded'>
                    Register
                </Button>
            </Form>
            {errorContainer}
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
            <GoogleLogin></GoogleLogin>
            <ToastContainer/>
        </div>
    );
};

export default Register;