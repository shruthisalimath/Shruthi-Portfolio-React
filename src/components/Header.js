import React from 'react';
import Nav from './Navigation';

//Create header using Nav as achild component, passing props from page component
function Header(props) {
    const {currentSection, handleSectionChange, } = props
    return(
        <header className='top'>
            <h1>
                Shruthi Portfolio
            </h1>
            <Nav currentSection={currentSection} handleSectionChange={handleSectionChange}>
            </Nav>
        </header>
    )
}

export default Header;