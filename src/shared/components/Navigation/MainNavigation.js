import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MainHeader from "./MainHeader";
import './MianNavigation.css'

const MainNavigation = props => {
    <MainHeader>
        <button className="main-navigation__menu-btn">
            <span />
            <span />
            <span />
            <span />

        </button>
        <h1 className="main-navigation__title">
            <Link to="/">Your places</Link>
        </h1>
        <nav>

        </nav>
    </MainHeader>
}

export default MainNavigation