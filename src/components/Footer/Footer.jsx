import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer">
                <div className="brand">
                    <h2>Dream Abode</h2>
                </div>
                <div className="link">
                    <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
        </section>
    );
};

export default Footer;