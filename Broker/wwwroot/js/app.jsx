
const NavLink = ReactRouterDOM.NavLink;

class Navbar extends React.Component {
    render() {
        <div>
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
        </div>
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />            
            </div>
        );
    }
}

class Info extends React.Component {
    render() {
        return (
            <h1>jopa</h1>
                );

    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
