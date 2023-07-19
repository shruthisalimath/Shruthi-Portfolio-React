import React from 'react';
import Project from '../Project';

import projectList  from "../Data/projectData";

const Portfolio = () => {
    return (
        <div className='sections'>
            <section id="Portfolio">
                <h2>Portfolio</h2>
                <div className="articles">
                    {projectList.map((projectListing) => (
                        <Project
                            title={projectListing.title}
                            url={projectListing.url}
                            image={projectListing.image}
                            description={projectListing.description}
                            technoligies={projectListing.technologies}
                            GithubRepo={projectListing.GithubRepo}
                        />
                    ))} 
                </div>
            </section>
        </div>
    );
}
    
export default Portfolio;