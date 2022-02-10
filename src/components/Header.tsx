// import React from 'react';
// import '../styles/navbar.css';
// import { HiMenu } from "react-icons/hi"

// const Navbar = () => {
//   return (
//   <div className="navbar">
//       <div className="logo">
//         <h1>Impact</h1>
//       </div>
//       <div className="menus">
//         <ul>
//             <li>Home</li>
//            <select>
//                <option value="menu1">Menu1</option>
//                <option value="menu2">Menu2</option>
//                <option value="menu3">Menu3</option>
//            </select>
//            <li>Services</li>
//            <li>Blog</li>
//            <li>About</li>
//            <li>Contact Us</li>
//         </ul>
//       </div>
//           <HiMenu className="menuIcon"/>
//       </div>
//   );
// };

// export default Navbar;


import { HiMenu } from "react-icons/hi"
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/header.css';

type Props = {};

const Header = (props: Props) => {
  return (
    <Navbar bg="myGreen" variant="dark">
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


