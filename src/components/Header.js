import React from 'react';
import Navigation from './Navigation';

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

export default Header;