import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png'
import Loading from '../Loading/Loading';

const GoogleLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    })
    let errorContainer;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorContainer = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div className='conatiner'>
        <div className='d-flex align-items-center justify-content-center'>
            <div style={{ height: "1px" }} className='w-25 bg-info'></div>
            <p className='px-3 mt-2'>or</p>
            <div style={{ height: "1px" }} className='w-25 bg-info'></div>
        </div>
        {errorContainer}
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-warning w-50  mx-auto mt-2 mb-5'>
                <img style={{ width: "20px" }} className="rounded me-3" src={google} alt="" />
                <span className='text-white fw-bold'>Sign In With Google</span>
            </button>
        </div>
    </div>
    );
};

export default GoogleLogin;