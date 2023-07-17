import React from 'react';

function Navigation(props) {
    const { currentPage, handlePageChange } = props
    const tabs = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];
    return (
        <nav>
            <ul className='flex-row'>
                {tabs.map(tab => (
                    <li className='mx-2' key={tab}>
                        <a href={'#' + tab.toLocaleLowerCase()}
                        onClick={() => handlePageChange(tab)}
                        className={currentPage === tab ? 'navActive' : 'nav-link'}
                        key={tab} >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;