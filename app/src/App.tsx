import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Submit from 'pages/Submit';
import TestWS from 'pages/TestWS';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/submit">
                    <Submit />
                </Route>

                <Route path="/testws">
                    <TestWS />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
