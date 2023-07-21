//imports the images for each project
import passwordGenerator from "../../assets/images/Password-generator.png";
import CareConnect from "../../assets/images/CareConnect.PNG";
import Weather_Dashboard from "../../assets/images/Screen_Shot_Weather_Dashboard.png";
import Tech_Blog from "../../assets/images/screen-short_MVC.png";
import LogoGenerator from "../../assets/images/Screen-Shot-LogoGenerator.png";
import WorkDayScheduler from "../../assets/images/Screen-Shot-Work-Day-Scheduler.png";
import codeTest from "../../assets/images/screenShot-codeTest.png";
import nationalPark from "../../assets/images/Screenshot-national-park.png";
import noteTaker from "../../assets/images/Screenshot-noteTaker.png";

const projectList = [
    {
        title: "Password-Generator",
        appUrl: "https://shruthisalimath.github.io/Secure-key-generator/",
        image: passwordGenerator,
        description: "Password generator using javascript",
        technologies: "HTML,CSS,JAVASCRIPT",
        GithubRepo: "https://github.com/shruthisalimath/Secure-key-generator"
    },
    {
        title: "Care-Connect",
        appUrl: "https://vast-beach-72570.herokuapp.com/",
        image: CareConnect,
        description: "Care Connect is a full stack web application that enables users to manage employee information within an organization.",
        technologies: "MySQL, Express.js, Node.js, Handlebars.js, CSS",
        GithubRepo: "https://https://github.com/pdangerfield/CareConnect.com/shruthisalimath/Secure-key-generator"
    },
    {
        title: "Weather-Dashboard",
        appUrl: "https://shruthisalimath.github.io/Weather-Panel/",
        image: Weather_Dashboard,
        description: " weather dashboard application to get current weather conditions of city and 5 day forecast of that city.",
        technologies: "Javascript, JQuery, Bootstrap, HTML, CSS",
        GithubRepo: "https://github.com/shruthisalimath/Weather-Panel"
    },
    {
        title: "Tech-Blog",
        appUrl: " https://techno-blogger-mvc.herokuapp.com/",
        image: Tech_Blog,
        description: "Tech_Blog creates a blog-style app where developers can create an account, edit their information, make or edit posts and comment on other users posts.",
        technologies: "Nodejs,Express,Sequelize,MySQL,",
        GithubRepo: "https://github.com/shruthisalimath/Techno-Blogger"
    },
    
    {
        title: "Work-Day-Scheduler",
        appUrl: "https://shruthisalimath.github.io/Work-Day-Timetable/",
        image: WorkDayScheduler,
        description: "Simple calendar application that allows the user to save events for each hour of the day from 9AM to 5 PM.",
        technologies: "JQuery, Javascript, Moment.js, Bootstrap, HTML, CSS",
        GithubRepo: "https://github.com/shruthisalimath/Work-Day-Timetable"
    },
    {
        title: "Code-Test",
        appUrl: "https://shruthisalimath.github.io/Code-knowledge-test/",
        image: codeTest,
        description: "A timer-based quiz application that stores high scores of multiple users. Answering incorrectly results in penality of time.",
        technologies: "Javascript, Bootstrap, Browser LocalStorage, HTML, CSS",
        GithubRepo: "https://github.com/shruthisalimath/Code-knowledge-test"
    },
    {
        title: "National-Park",
        appUrl: " https://shruthisalimath.github.io/Team-Shrek/",
        image: nationalPark,
        description: "Search of National Parks in particular state with its information and Current day weather iformationof the city.",
        technologies: "Html,Css,Bulma,Javascript,Jquery",
        GithubRepo: "https://github.com/shruthisalimath/Team-Shrek"
    },
    {
        title: "Note-Taker",
        appUrl: " https://note-register.herokuapp.com/",
        image: noteTaker,
        description: "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore.",
        technologies: "Express.js, Node.js, UUID, Javascript, HTML, CSS",
        GithubRepo: "https://github.com/shruthisalimath/Note-Register"
    },
    {
        title: "Logo-Generator",
        appUrl: "https://shruthisalimath.github.io/Secure-key-generator/",
        image: LogoGenerator,
        description: "The application enables users to generate a logo file with the input of text(3 characters),text color,choice of shape(circle, triangle and square) and shape color",
        technologies: "Html,Css,Javascript,Node.js",
        GithubRepo: "https://github.com/shruthisalimath/Secure-key-generator"
    },
]

export default projectList;

// import React from 'react';
// import { Card, Col, Container, Row } from 'react-bootstrap';
// import { FaGithub, FaChrome } from "react-icons/fa6";
// //import   projectList  from './../Data/projectData';

// const Portfolio = (props) => {
//   return (
//     <>
//       <section id="portfolio">
//         <br />
//         <br />
//         <br />
//         <Container>
//           <Row>
//             <Col className="text-center">
//               <h2 className="heading"><strong>Projects</strong></h2>
//             </Col>
//           </Row>
//           <hr className="line" />
//           <br />
//           <Row>
//             {props.data.map((data) => {
//               return (
//                 <Col md={4} style={{ padding: '20px', backgroundColor: 'transparent' }}>
//                   <Card className="shadow card-style" style={{ borderRadius: '10px', backgroundColor: 'lavenderblush', textAlign: 'center', }} >
//                     <Card.Img variant="top" src={data.image} />

//                     <Card.Body style={{ paddingTop: '20px' }}>
//                       <Card.Title style={{ fontSize: '2em', color: 'darkmagenta' }}><strong>{data.title}</strong></Card.Title>
//                       <hr className="line" />
//                       <Card.Text style={{ fontSize: '1.2em', textAlign: 'left', color: '#505050', padding: '15px' }}>Description: {data.description}</Card.Text>
//                       <hr className="line" />
//                       <Card.Text style={{ fontSize: '1.2em', textAlign: 'left', color: '#505050', padding: '15px' }}>Technologies: {data.technologies}</Card.Text>
//                       <hr className="line" />
//                       <div className="float-right" style={{ padding: '15px' }}>
//                         <a style={{ minWidth: '60px', margin: '15px 10px 5px', }} href={data.appUrl} className="tooltip-test" title="Deployed Website" target="_blank" rel="noopener noreferrer" >
//                           <FaChrome style={{ fontSize: '30px' }} />
//                         </a>
//                         <a style={{ minWidth: '60px', margin: '15px 10px 5px', }} href={data.GithubRepo} className="tooltip-test" title="GitHub Repo" target="_blank" rel="noopener noreferrer">
//                           <FaGithub style={{ fontSize: '30px' }} />
//                         </a>
//                       </div>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               )
//             }
//             )}
//           </Row>
//         </Container>
//         <br />
//         <br />
//       </section>
//     </>
//   )
// }

// export default Portfolio;
