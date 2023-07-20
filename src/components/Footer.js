import React from 'react';
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className="footer">
            <div className='footerLink' >
                <a href='https://github.com/shruthisalimath' target='_blank' rel='noreferrer'><FaGithub style={{fontSize:'35px' }} /></a>
                <a href='shruthisalimath' target='_blank' rel='noreferrer'><FaLinkedin style={{fontSize:'35px' }} /></a>
                <div className='Number'> <FaPhone />111-222-3333</div>
                <div className='Email'> <MdOutlineEmail />shruthi@gmail.com</div>
            </div>
        </footer>
    )
}

export default Footer;