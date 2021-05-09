import React, { useContext } from "react";
import logo from "../images/my-wallet.png";
import { NavbarBrand, Navbar, Nav, NavLink, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext"

const Header = () => {
  const { logoutUser, user } = useContext(UserContext)

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <Navbar>
      <Container>
        <NavbarBrand>
          <Link to="/">
            <img src={logo} alt="logo" style={{ height: 50 }} />
          </Link>
        </NavbarBrand>
        <Nav>
          {
            user.token ? (
              <>
                <Link to="/" className="nav-link">
                  <NavLink>Overview</NavLink>
                </Link>
                <Link to="/transactions" className="nav-link">
                  <NavLink>history</NavLink>
                </Link>
                <Link to="/" className="nav-link">
                  <NavLink>add transaction</NavLink>
                </Link>
                <Nav.Link onClick={handleLogout}>logout</Nav.Link>
              </>
            ) : (
                <>
                <Link to="/login" classname="nav-link">
                  <Nav.Link>
                    LOG IN
                  </Nav.Link>
                  </Link>
                  <Link to="/register" classname="nav-link">
                    <Nav.Link>
                      SIGN UP
                  </Nav.Link>
                  </Link>
                </>
              )
          }

        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
