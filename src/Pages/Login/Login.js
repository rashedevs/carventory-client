import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('')
    const passwordRef = useRef('')

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    })
    const handleResetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Email sent successfully')
        }
        else {
            toast('Please enter your email')
        }
    }

    if (loading || sending) {
        return <Loading></Loading>
    }
    let errorContainer;
    if (error || error2) {
        errorContainer = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleLoginSubmit = async(event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await signInWithEmailAndPassword(email,password)
        event.target.reset()
    }
    // style={{ height: "100vh" }}
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary my-4 text-center'>Please Login</h2>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control  type="email" ref={emailRef} placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" className='d-block mx-auto w-50 my-2 fw-bold text-white rounded' type="submit">
                    Login
                </Button>
            </Form>
            {errorContainer}
            <p className='mt-3'>New to Carventory? <Link to='/register' className='text-primary pe-auto text-decoration-none ms-1'>Please Register</Link></p>

            <p className='mt-3 ms-3'>Forgot Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={handleResetPassword}>Reset Password</button></p>
            <GoogleLogin></GoogleLogin>
            <ToastContainer/>
        </div>
    );
};

export default Login;