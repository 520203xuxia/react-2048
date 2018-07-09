import {
	HashRouter as Router,
	Switch,
	Route,
	BrowserRouter
} from 'react-router-dom'
import React from 'react'
import Container from '../components/Container'
import complete from '../components/complete'

export default () => {
	return (
		<Router>
      <Switch>
				<Route exact path='/' component={Container} />
				<Route path='/complete'  component={complete}/>
      </Switch>
    </Router>
	)
}