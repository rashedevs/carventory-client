import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='container-fluid content'>
            <h6>Carventory</h6>
            <p><small>Copyright &copy; {new Date().getFullYear()}</small></p>
    </footer>
    );
};

export default Footer;