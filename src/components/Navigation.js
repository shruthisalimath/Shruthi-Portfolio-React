import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
  const { handlePageChange } = props
    return (
        <Nav className="justify-content-end navbar" variant="tabs" defaultActiveKey="/AboutMe">
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



export default Navigation;