import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { HiMenu } from "react-icons/hi"
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import '../styles/sidebar.css';

function Sidebar() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <HiMenu className="menuIcon" onClick={handleShow}/>
        <Offcanvas show={show} onHide={handleClose} placement="end" className="sidebar">
          <Offcanvas.Header closeButton >
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav className="ms-auto" id="side_menu">
              <Nav.Link href="#features" id="active" className="sidebar_menu">Home</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown" className="sidebar_menu">
                <NavDropdown.Item href="#action/3.1">Menu 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Menu 2
                    <Dropdown.Item title="Menu 2" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Menu 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Menu 2 </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Menu 3</NavDropdown.Item>
                    </Dropdown.Item>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Menu 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing" className="sidebar_menu">Service</Nav.Link>
              <Nav.Link href="#pricing" className="sidebar_menu">Blog</Nav.Link>
              <Nav.Link href="#pricing" className="sidebar_menu">About</Nav.Link>
              <Nav.Link href="#pricing" className="sidebar_menu">ContactUs</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default Sidebar