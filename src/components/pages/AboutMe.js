import React from "react";
import profilePic from "../../assets/images/profilepic.jpg";
import { Figure, Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => (
    <Container>
        <Row className="AboutMeRow">
            <Col>
                <Figure>
                    <Figure.Image
                        width={250}
                        height={180}
                        alt="Profile"
                        src={profilePic}
                    />
                </Figure>
            </Col>
            <Col xs={7}>
                <div className='AboutMeTitle'>
                    <h2>About Me</h2>
                </div>
                <div className='AboutMeContent'>
                    <p>
                        My name is Shruthi Rajashekar. I am originally from India. Moved to USA after my marriage.
                    </p>
                    
                    <p>
                        I am a Full Stack Web developer with certification in Full Stack Web Development and master degree in Computer science.
                        Effective at combining logical thinking and problem solving to develop user-friendly applications.
                        Life-Long dedication to learning and self development.
                        Quick-learner, organized, collaborative communicator.
                        
                    </p>
                    <p>
                        I am Bollywood dance teacher and also an Event Decorator.
                        Dancing is my passion and I love hikking in summer.
                        I am also a vegetarian food lover.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
)

export default AboutMe;