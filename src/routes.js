import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import Home from './pages/Home';
import ComoJogar from './pages/HowPlay';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/como-jogar" exact component={ComoJogar} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
