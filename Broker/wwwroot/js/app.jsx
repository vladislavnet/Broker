import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar'


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
