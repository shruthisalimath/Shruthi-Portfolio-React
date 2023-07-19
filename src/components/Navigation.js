import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
  const { handlePageChange } = props
    return (
        <Nav className="justify-content-end" variant="tabs" defaultActiveKey="/AboutMe">
          <Nav.Item>
            <Nav.Link href="#AboutMe" 
            onClick={() => handlePageChange("AboutMe")}>AboutMe</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" href ='#Portfolio' 
            onClick={() => handlePageChange("Portfolio")}>Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="link-2" href='#Contact'
          onClick={() => handlePageChange("Contact")}>Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="link-3" href='#Resume'
          onClick={() => handlePageChange("Resume")} >Resume</Nav.Link>
          </Nav.Item>
        </Nav>
      );
}

// function Navigation(props) {
//   const { currentPage, handlePageChange } = props
//   const tabs = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];
//   return (

//     <nav>
//       <ul className='flex-row'>
//         {tabs.map(tab => (
//           <li className='mx-2' key={tab} >
//             <a href={'#' + tab.toLocaleLowerCase()}
//               onClick={() => handlePageChange(tab)}
//               className={currentPage === tab ? 'navActive' : 'nav-link'}
//               key={tab} >
//               {tab}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }


export default Navigation;