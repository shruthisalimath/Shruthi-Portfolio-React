import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Portfolio from '../components/pages/Portfolio';
import { projectList } from '../components/Data/projectData';

const Project = () => {
    return(
        <>
           <section id="portfolio">
				<br/>
        <br/>
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
            {projectList.map((eachProject) => (
              <Portfolio key={eachProject.GithubRepo} project={eachProject} />
            ))}
          </Row>
        </Container>
        <br />
        <br /> 
      </section>   
        </>
    )
}

// const Project = (props) => {
//     const title = props.title;

//     const link = props.url ? (
//         <a href={props.url} target="_blank" rel="noreferrer">
//             {title}
//         </a>
//     ) : (
//         ""
//     );
//     // Variable to build an image link to the project, if the url and image was passed.  Otherwise, empty string.
//     const imgLink =
//         props.url && props.image ? (
//             <a href={props.url} target="_blank" rel="noreferrer">
//                 <img src={props.image} alt={title} />
//             </a>
//         ) : (
//             ""
//         );

//     // Variable to hold the project description, if the description was passed.
//     const description = props.description ? <p> {props.description} </p> : "";

//     // Variable to hold the project's technologies, if the technologies were passed.
//     const technologies = props.technologies ? (
//         <p>Technologies: {props.technologies}</p>
//     ) : (
//         ""
//     );

//     // Variable to build an image link to the project's GitHub repo, if it was passed.  Otherwise, empty string.
//     const GitHubRepoLink = props.GitHubRepo ? (
//         <p>
//             {
//                 <a href={props.GitHubRepo} target="_blank" rel="noreferrer">
//                     <img src={ FaGithub } alt="GitHub" />
//                 </a>
//             }
//         </p>
//     ) : (
//         ""
//     );

//     // Builds the article, i.e. card, for each project.
//     return (
//         <article key={title}>
//             <header>
//                 <h3>{link}</h3>
//                 {GitHubRepoLink}
//             </header>
//             {imgLink}
//             {description}
//             {technologies}
//         </article>
//     );
// }

export default Project;