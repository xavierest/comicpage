import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            <img src={Logo} style={{ width: "2.5em", height: "2.5em" }} />
          </Nav.Link>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/feature" as={NavLink}>
            Feature
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
