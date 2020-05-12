import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends React.Component {
    render() {
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">Broker</div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/"> Stocks</NavLink>
            </li>
        </ul>
    </nav>
    }
}
export default Navbar;