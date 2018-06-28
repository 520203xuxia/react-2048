import {
	Switch,
	Route,
	BrowserRouter
} from 'react-router-dom'
import React from 'react'

import Container from '../components/Container'
import Parent from '../components/Parent'

const Main = () => (
	<BrowserRouter>
    <Switch>
      <Route exact path='/' component={Container}/>
      <Route path='/Parent' component={Parent}/>
    </Switch>
  </BrowserRouter>
)