import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import About from './views/about-us'
import Contact from './views/contact-us'
import Cookies from './views/cookies-settings'
import Privacy from './views/privacy-policy'
import Terms from './views/terms-of-service'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about-us" />
        <Route component={Contact} exact path="/contact-us" />
        <Route component={cookies} exact path="/cookies-settings" />
        <Route component={privacy} exact path="/privacy-policy" />
        <Route component={terms} exact path="/terms-of-service" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
