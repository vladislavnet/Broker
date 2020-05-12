import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
