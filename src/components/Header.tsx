

import { BiChevronRight } from "react-icons/bi"
import { BiChevronDown } from "react-icons/bi"
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/header.css';
import Sidebar from "./Sidebar";

type Props = { };

const Header = (props: Props) => {

  return (
    <>
    <Navbar className="myGreen" variant="dark">
       <Container>
          <Navbar.Brand href="#home" className="logo">Impact</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" id="menus">
              <Nav.Link href="#features" id="menu" active>Home</Nav.Link>
              <li className="nav-item dropdown" style={{ position: 'relative' }} >
                <a className='nav-link' style={{ paddingLeft: '30px'}}>Dropdown<BiChevronDown /></a>
                <ul className="dropdown-1" style={{ listStyle: 'none' }}>
                  <li className="menu">Menu One</li>
                  <li className="menu">
                    <span>Menu Two </span>
                    <BiChevronRight />
                    <ul className="dropdown-2" style={{ listStyle: 'none' }}>
                      <li className="menu">Sub Menu One</li>
                      <li className="menu">Sub Menu Two</li>
                      <li className="menu">Sub Menu Three</li>
                    </ul>
                  </li>
                  <li className="menu">Menu Three</li>
                </ul>
              </li>
              <Nav.Link href="#pricing" id="menu">Service</Nav.Link>
              <Nav.Link href="#pricing" id="menu">Blog</Nav.Link>
              <Nav.Link href="#pricing" id="menu">About</Nav.Link>
              <Nav.Link href="#pricing" id="menu">ContactUs</Nav.Link>
            </Nav>
          <Nav>
           <Sidebar />
          </Nav>
          </Navbar.Collapse>
       </Container>
    </Navbar>
    </>
  );
};

export default Header;


