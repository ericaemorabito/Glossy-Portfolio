import React, { useState } from "react";
import { Button, Offcanvas, Navbar, Container, Nav } from "react-bootstrap";
import "../styles/header.css";
import linkedIn from '../assets/linkedInCircle.svg'
import menu from '../assets/menu.svg'

const Header = ({ expand }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="mb-3">
      <Container fluid>
        <Nav>
          <Nav.Link>
            <img src={linkedIn} id="linkedin-icon" alt='linkedIn icon'>
            </img>
          </Nav.Link>
        </Nav>
        <Navbar.Brand id="brand" href="#">Erica</Navbar.Brand>
        <Navbar.Toggle aria-controls={`'offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          show={show}
          onHide={handleClose}
        ></Navbar.Offcanvas>
      </Container>
      <button onClick={handleShow}>
        <img id="menu-icon" src={menu} className="header-icons">
        </img>
      </button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Portfolio</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav>
          <Nav.Link>About</Nav.Link>
        </Nav>
        </Offcanvas.Body>
      </Offcanvas>{" "}
      *
    </Navbar>
  );
};

export default Header;
