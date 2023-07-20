import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaGithub, FaChrome } from "react-icons/fa6";
//import { projectList } from '../components/Data/projectData';
 


const Portfolio = (props) => {
    return(
        <>
        <Col lg={4} style={{ padding: '20px',backgroundColor: 'transparent'}}>
            <Card className="shadow card-style" style={{ borderRadius: '10px', backgroundColor: '#ffffff', textAlign: 'center',}} >
              <Card.Img variant="top" src={props.projectList.image} />
              <Card.Body style={{ paddingTop: '0'}}>
                <Card.Title style={{fontSize:'1.3em', color:'#444444'}}><strong>{props.projectList.title}</strong></Card.Title>
                <Card.Text style={{fontSize:'1.2em', textAlign: 'left',color: '#505050',padding: '15px'}}>Description :{props.projectList.description}</Card.Text>
                <Card.Text style={{fontSize:'1.2em', textAlign: 'left',color: '#505050',padding: '15px'}}>Technologies :{props.projectList.technologies}</Card.Text>
                <div className="float-right" style={{ padding: '15px' }}>
                    <a style={{ minWidth: '60px',margin: '15px 10px 5px',}} href={props.projectList.appUrl} className="tooltip-test" title="Deployed Website" target="_blank" rel="noopener noreferrer" >
                      <FaChrome style={{fontSize:'30px' }} />
                    </a>
                    <a style={{ minWidth: '60px',margin: '15px 10px 5px',}} href={ props.projectList.GithubRepo } className="tooltip-test" title="GitHub Repo" target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{fontSize:'30px' }} />
                    </a>
                  </div>
                  </Card.Body>
            </Card>
          </Col>                  
        </>
    )
}

export default Portfolio;







// import React from 'react';
// import Project from '../Project';

// import projectList  from "../Data/projectData";

// const Portfolio = () => {
//     return (
//         <div className='sections'>
//             <section id="Portfolio">
//                 <h2>Portfolio</h2>
//                 <div className="articles">
//                     {projectList.map((projectListing) => (
//                         <Project
//                             title={projectListing.title}
//                             url={projectListing.url}
//                             image={projectListing.image}
//                             description={projectListing.description}
//                             technoligies={projectListing.technologies}
//                             GithubRepo={projectListing.GithubRepo}
//                         />
//                     ))} 
//                 </div>
//             </section>
//         </div>
//     );
// }
    
// export default Portfolio;