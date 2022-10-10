import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import AppAdmin from './admin/AppAdmin';
function RouterComp() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />       
                <Route path='/admin' component={AppAdmin} />
            </Switch>
        </BrowserRouter>
    )
}
export default RouterComp;


