import React from 'react';
import logo from './preumskat.jpg';

const Footer = () => {
    return (
        <footer className="Footer">
        <p>
            <img src={logo} className="PreumsKat" alt="Preums Logo" />
            copyright by Preums !
        </p>
        </footer>
    );
}

export default Footer;