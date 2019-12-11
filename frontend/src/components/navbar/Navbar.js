import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../../style/components";

const Navbar = () => (
  <StyledNavbar>
    <h1>MediNurse</h1>
    <ul>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </StyledNavbar>
);

export default Navbar;