import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ComoJogar from './pages/HowPlay';
import Medalhas from './pages/Medals';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/como-jogar" exact component={ComoJogar} />
                <Route path="/medalhas" exact component={Medalhas} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
