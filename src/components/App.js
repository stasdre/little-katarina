import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Calendar from './Calendar'
import Time from './Time'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route
                path="/:lang/booking/:year/:month/:day"
                component={Time}
            ></Route>
            <Route exact path="/:lang/booking" component={Calendar}></Route>
        </Switch>
    </BrowserRouter>
)
