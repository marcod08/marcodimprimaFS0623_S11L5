import { Col, Container, Nav, NavLink, NavbarBrand, Row } from "react-bootstrap"
import logo from "../assets/logo/logo.png"
import { BookFill, HouseDoorFill } from "react-bootstrap-icons"
import FormSearch from "./FormSearch"

const MyNav = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Nav
            className="navbar navbar-expand-md fixed-left justify-content-between"
            id="sidebar"
          >
            <Container className="flex-column align-items-start">
              <NavbarBrand href="index.html">
                <img src={logo} alt="Spotify Logo" width="131" height="40" />
              </NavbarBrand>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <NavLink
                        className="nav-item d-flex align-items-center"
                        href="/"
                      >
                        <HouseDoorFill />
                        &nbsp; Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="nav-item d-flex align-items-center"
                        href="/"
                      >
                        <BookFill />
                        &nbsp; Your Library
                      </NavLink>
                    </li>
                    <li>
                      <FormSearch />
                    </li>
                  </ul>
                </div>
              </div>
            </Container>
            <div className="nav-btn">
              <button className="btn signup-btn" type="button">
                Sign Up
              </button>
              <button className="btn login-btn" type="button">
                Login
              </button>
              <a href="/">Cookie Policy</a> |<a href="/"> Privacy</a>
            </div>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

export default MyNav
