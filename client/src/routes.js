import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import Database from './Database';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/Database" component={Database} />
        </div>
    </Router>
);

export default Routes; 