import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import "./Navbar.css";

const Categories = () => {
  return (
    <>
      <Navbar className="categories p-0">
        <Container>
          <Navbar.Toggle aria-controls="toggle" />
          <Navbar.Collapse id="toggle">
            <Nav style={{ paddingLeft: "6rem" }}>
              <Nav.Link href="#popular">Popular</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#fashion">Fashion</Nav.Link>
              <Nav.Link href="#clothes">Clothes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

const Topbar = () => {
  return (
    <>
      <Navbar className="topbar" variant="dark">
        <Container>
          <Navbar.Brand href="#logo">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="toggleBtn" />
          <Navbar.Collapse id="toggleBtn">
            <Form.Control
              className="text-center inputBox"
              type="email"
              placeholder="Search"
            />
          </Navbar.Collapse>
          <a className="adminBtn" href="/admin">
            Admin
          </a>
        </Container>
      </Navbar>
      <Categories />
    </>
  );
};

export default Topbar;
