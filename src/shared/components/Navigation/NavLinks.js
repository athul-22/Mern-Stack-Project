import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './NavLinks.css'

const NavLinks = () =>{
    return(
            <ul className="nav-links">
                <li>
                    <NavLink to="/" exact>All Users</NavLink>
                </li>
                <li>
                    <NavLink to="/u1/places" exact>My places</NavLink>
                </li>
                <li>
                    <NavLink to="/places/new" exact>Add Place</NavLink>
                </li>
                <li>
                    <NavLink to="/auth" exact>Authentication</NavLink>
                </li>
            </ul>
    );
}

export default NavLinks;