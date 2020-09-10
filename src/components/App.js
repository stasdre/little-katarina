import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Calendar from './Calendar'
import Time from './Time'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route
                path="/little-katarina/book/:year/:month/:day"
                component={Time}
            ></Route>
            <Route
                exact
                path="/little-katarina/book.html"
                component={Calendar}
            ></Route>
        </Switch>
    </BrowserRouter>
)
