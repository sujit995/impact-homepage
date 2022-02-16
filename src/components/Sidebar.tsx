import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { HiMenu } from "react-icons/hi"
import { Nav } from 'react-bootstrap';
import { BiChevronRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import '../styles/sidebar.css';
import "react-bootstrap-submenu/dist/index.css";

function Sidebar() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const buttonSqueeze = () => {
      const buttonFragments = document.querySelectorAll<HTMLElement>('.nav-toggler div');
      buttonFragments.forEach(fragment => {
        fragment.style.margin = '6px 0';
      });
    }
    
    const buttonUnSqueeze = () => {
      const buttonFragments = document.querySelectorAll<HTMLElement>('.nav-toggler div');
      buttonFragments.forEach(fragment => {
        fragment.style.margin = '9px 0';
      });
    }

    const toggleSidebarDropdown1 = () => {
      const dropdown = document.querySelector<HTMLElement>('.sidebar-dropdown-1');
      if (dropdown) {
        if (dropdown.style.display === 'none')
          dropdown.style.display = 'block';
        else
          dropdown.style.display = 'none';
      }
    }
  
    const toggleSidebarDropdown2 = () => {
      const dropdown = document.querySelector<HTMLElement>('.sidebar-dropdown-2');
      if (dropdown) {
        if (dropdown.style.display === 'none')
          dropdown.style.display = 'block';
        else
          dropdown.style.display = 'none';
      }
    }
  
    return (
      <>
        <button
        className="nav-toggler"
        type="button"
        onMouseOver={buttonSqueeze}
        onMouseLeave={buttonUnSqueeze}
        onClick={handleShow}
        style={{ border: 'none', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <div style={{ backgroundColor: 'white', width: '30px', height: '2px', margin: '9px 0' }}></div>
        <div style={{ backgroundColor: 'white', width: '30px', height: '2px', margin: '9px 0' }}></div>
        <div style={{ backgroundColor: 'white', width: '30px', height: '2px', margin: '9px 0' }}></div>
      </button>
        {/* <HiMenu className="menuIcon" onClick={handleShow}/> */}
        <Offcanvas show={show} onHide={handleClose} placement="end" className="sidebar">
          <Offcanvas.Header closeButton >
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav className="ms-auto" id="side_menu">
              <Nav.Link href="#features" id="active" className="sidebar_menu">Home</Nav.Link>
              <li
              className="nav-item dropdown"
              style={{ position: 'relative' }}
            >
              <a
                className='nav-link text-body d-flex justify-content-between align-items-center'
                onClick={toggleSidebarDropdown1}
              >
                <div>Dropdown</div>
                <BiChevronDown/>
              </a>

              <ul
                className="sidebar-dropdown-1"
                style={{ width: '100%', padding: '5px 20px 0 20px', listStyle: 'none', display: 'none' }}>
                <li>Menu One</li>
                <li>
                  <a
                    className='d-flex justify-content-between align-items-center text-body text-decoration-none'
                    onClick={toggleSidebarDropdown2}
                  >
                    <div>Menu Two</div>
                    <BiChevronDown/>
                  </a>
                  <ul
                    className="sidebar-dropdown-2"
                    style={{ padding: '5px 20px 0 20px', listStyle: 'none', display: 'none' }}
                  >
                    <li className='text-body'>Sub Menu One</li>
                    <li>Sub Menu Two</li>
                    <li>Sub Menu Three</li>
                  </ul>
                </li>
                <li>Menu Three</li>
              </ul>

            </li> 
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