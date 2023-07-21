import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaChrome } from "react-icons/fa6";
//import   projectList  from './../Data/projectData';

const Portfolio = (props) => {
  return (
    <>
      <section id="portfolio">
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className="heading"><strong>Projects</strong></h2>
            </Col>
          </Row>
          <hr className="line" />
          <br />
          <Row>
            {props.data.map((data) => {
              return (
                <Col md={4} style={{ padding: '20px', backgroundColor: 'transparent' }}>
                  <Card className="shadow card-style" style={{ borderRadius: '10px', backgroundColor: 'lavenderblush', textAlign: 'center', }} >
                    <Card.Img variant="top" src={data.image} />

                    <Card.Body style={{ paddingTop: '20px' }}>
                      <Card.Title style={{ fontSize: '2em', color: 'darkmagenta' }}><strong>{data.title}</strong></Card.Title>
                      <hr className="line" />
                      <Card.Text style={{ fontSize: '1.2em', textAlign: 'left', color: '#505050', padding: '15px' }}>Description: {data.description}</Card.Text>
                      <hr className="line" />
                      <Card.Text style={{ fontSize: '1.2em', textAlign: 'left', color: '#505050', padding: '15px' }}>Technologies: {data.technologies}</Card.Text>
                      <hr className="line" />
                      <div className="float-right" style={{ padding: '15px' }}>
                        <a style={{ minWidth: '60px', margin: '15px 10px 5px', }} href={data.appUrl} className="tooltip-test" title="Deployed Website" target="_blank" rel="noopener noreferrer" >
                          <FaChrome style={{ fontSize: '30px' }} />
                        </a>
                        <a style={{ minWidth: '60px', margin: '15px 10px 5px', }} href={data.GithubRepo} className="tooltip-test" title="GitHub Repo" target="_blank" rel="noopener noreferrer">
                          <FaGithub style={{ fontSize: '30px' }} />
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            }
            )}
          </Row>
        </Container>
        <br />
        <br />
      </section>
    </>
  )
}

export default Portfolio;



// import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import Portfolio from '../components/pages/Portfolio';
// import projectList from '../components/Data/projectData';

// const Project = () => {
//   return (
//     <>
//       <section id="portfolio">
//                                           <br/>
//         <br/>
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
//             {projectList.map((eachProject) => (
//               <Portfolio key={eachProject.GithubRepo} project={eachProject} />
//             ))}
//           </Row>
//         </Container>
//         <br />
//         <br />
//       </section>
//     </>
//   )
// }

// export default Project;