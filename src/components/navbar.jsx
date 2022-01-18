import logo from '../logo.svg';
import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" alt="" />
            </a>
            <form className="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
}

export default NavBar;