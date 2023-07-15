import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './NavLinks.css';
import { Authcontext } from "../../context/auth-contex";
import Button from "../../FormElements/Button";

const NavLinks = props =>{

    const auth = useContext(Authcontext);

    return(
            <ul className="nav-links">
                <li>
                    <NavLink to="/" exact>All Users</NavLink>
                </li>
                {auth.isLoggedIn && (
                <li>
                    <NavLink to="/u1/places" exact >My places</NavLink>
                </li>)}

                {auth.isLoggedIn && (
                <li>
                    <NavLink to="/places/new" exact >Add Place</NavLink>
                </li>)}

                {!auth.isLoggedIn && (
                <li>
                    <NavLink to="/authenticaton" exact>Authentication</NavLink>
                </li>)}

                {auth.isLoggedIn && (
                    <Button onClick={auth.logout}>LOGOUT</Button>
                )}

            </ul>
    );
}

export default NavLinks;