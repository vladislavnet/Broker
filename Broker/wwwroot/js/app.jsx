import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
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
)


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container pt-4">
                <Alert />
                <Switch>
                    <Route path={'/'} exact component={Home} />

                </Switch>
            </div>
        </BrowserRouter>
        );
}
ReactDOM.render(
    <App />,
    document.getElementById("app")
);
