

import { HiMenu } from "react-icons/hi"
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/header.css';

type Props = {};

const Header = (props: Props) => {
  return (
    <Navbar className="myGreen" variant="dark">
       <Container>
          <Navbar.Brand href="#home" className="logo">Impact</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" id="menus">
              <Nav.Link href="#features" id="menu">Home</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Menu 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Menu 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Menu 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing" id="menu">Service</Nav.Link>
              <Nav.Link href="#pricing" id="menu">Blog</Nav.Link>
              <Nav.Link href="#pricing" id="menu">About</Nav.Link>
              <Nav.Link href="#pricing" id="menu">ContactUs</Nav.Link>
            </Nav>
          <Nav>
          <HiMenu className="menuIcon"/>
    </Nav>
  </Navbar.Collapse>
  </Container>
    </Navbar>
  );
};

export default Header;


