import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'



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
            <div>jopa</div>
                );

    }
}

ReactDOM.render(
    <Info />,
    document.getElementById("app")
);
