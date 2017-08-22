/**
 * Created by Douglas on 7/27/2017.
 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NotFound from './Pages/notFound'
import Search from './Pages/searchResult'

export default () => (
  <Router>
    <Switch>

      <Route exact path="/" component={Search} />

      <Route component={NotFound} />

    </Switch>
  </Router>
)