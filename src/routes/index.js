import React from 'react'
import { Router, Route, Switch } from 'react-router'
import Review from './Review'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/reviews/:id" component={Review} />
      </Switch>
    </Router>
  )
}

export default Routes
