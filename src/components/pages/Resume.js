import React from 'react';
import resumeDoc from '../../assets/images/Resume-Shruthi.pdf';

const Resume = () => (
    <div>
        <h2>Resume</h2>
        <div>
            <p>Download My <a href={resumeDoc} download="resume"> Resume </a></p>
        </div>
        <div>Front-End Proficiencies:</div>
        <ul className="resume">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Jquery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>
        <div>Back-End proficiencies: </div>
        <ul className="resume">
            <li>Nodejs</li>
            <li>Expressjs</li>
            <li>MySql, Sequelize</li>
            <li>MongoDB, Mongoose</li>            
        </ul>
        <div>Full-Stack proficiencies: </div>
        <ul className="resume">
            <li>MVC</li>
            <li>PWA</li>
            <li>REST API</li>
            <li>MERN Stack</li>
            <li>GraphQL</li>
        </ul>
    </div>  
);

export default Resume;