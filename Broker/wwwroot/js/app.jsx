import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './Components/Navbar'



class App extends React.Component {
    render() {
        return (
            <div>
            <BrowserRouter>
                <Navbar />
                    <div className="container pt-4">
                        <Alert />
                        <Switch>
                            <Route path={'/'} exact component={Home} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
