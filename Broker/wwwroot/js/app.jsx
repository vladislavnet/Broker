//import React from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './Components/Navbar'



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
