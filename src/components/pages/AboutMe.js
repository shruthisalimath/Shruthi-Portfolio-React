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
                        My name is Shruthi. I am originally from India. Moved to USA after my marriage and have 2 beautiful girls.
                    </p>
                    <p>
                        I am a graduate in computer science from india. I am Bollywood dance teacher in draper.And I also do event decoration.
                        Dancing is my passion and I love hikking in summer.
                        I am vegetarian food lover.
                    </p>
                    <p>
                        Currently I am a Bootcamp student of U of U. Learning how to create websites as full stack developer.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
)

export default AboutMe;