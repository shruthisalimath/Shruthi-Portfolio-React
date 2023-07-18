import React from "react";

const AboutMe = () => (
    <div>
        <div className='AboutMe'>
            <h2>About Me</h2>
        </div>
        <div className='AboutMe'>
            <img  src={require('../../assets/images/profilepic.jpg').default}
            alt="Profile" 
            className= "prfileImg"
            key="Profile"/>
        </div>
        <div className='AboutMe'>
            <p> 
            My name is Shruthi. I am originally from India. Moved to USA after my marriage and have 2 beautiful girls. 
            I am a graduate in computer science from india. I am Bollywood dance teacher in draper.And I also do event decoration. 
            Dancing is my passion and I love hikking in summer. I am vegetarian food lover.
            Currently I am a Bootcamp student of U of U. Learning how to create websites usinging HTML,CSS and JavaScript.
            </p>
        </div>
    </div>
)

export default AboutMe;