import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaFacebook } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className="footer">
            <div className='footerLink' >
                <a href='https://github.com/shruthisalimath' target='_blank' rel='noreferrer'><FaGithub style={{fontSize:'35px' }} /></a>
                <a href='https://www.linkedin.com/in/shruthi-rajashekar-3683b5150/' target='_blank' rel='noreferrer'><FaLinkedin style={{fontSize:'35px' }} /></a>
                <a href='https://github.com/shruthisalimath' target='_blank' rel='noreferrer'><FaFacebook style={{fontSize:'35px' }} /></a>
                <div className='Number'> <FaPhone />801-898-6533</div>
                <div className='Email'> <MdOutlineEmail />shruthishekar@gmail.com</div>
            </div>
        </footer>
    )
}

export default Footer;