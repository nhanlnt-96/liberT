import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {adminHeaderMenu} from "configs/adminHeaderMenu";

import "./AdminHeader.scss";
import {Link} from "react-router-dom";

const AdminHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid className="admin-header-container">
        <Navbar.Brand href="#home">Project Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="admin-header-toggle"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {
              adminHeaderMenu.map((val, index) => (
                <Link className="nav-link" key={index} to={val.path}>{val.label}</Link>
              ))
            }
          </Nav>
          <Nav>
            <NavDropdown title="Username" id="collasible-nav-dropdown">
              <NavDropdown.Item>Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;