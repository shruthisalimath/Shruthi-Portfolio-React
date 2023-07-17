import React from 'react';
import Navigation from './Navigation';

//Create header using Nav as achild component, passing props from page component

function Header(props) {
    const { currentPage, handlePageChange } = props
    return (
      <header className="myPortfolio">
        <h1>
            Shruthi's Portfolio
        </h1>
        <Navigation 
            currentPage={currentPage}
            handlePageChange={handlePageChange}>
        </Navigation>
      </header>
    );
  }
// function Header(props) {
//     const { currentSection, handleSectionChange } = props
//     return(
//         <header className='top'>
//             <h1>
//                 Shruthi's Portfolio
//             </h1>
//             <Nav currentSection={currentSection} handleSectionChange={ handleSectionChange } />
           
//         </header>
//     )
// }

export default Header;