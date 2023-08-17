import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css';
const NavBar = () => {
  return (
    <nav>
      <ul>
          <p>Fruity Zoda</p>
        {/* <li className="logo"> */}
        {/* </li> */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/flavours">Flavors</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar
