import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'

export default class App extends Component{
  static propTypes = {
  }
  render(){
    return(
      <Router>
        <div>
          <Route exact path='/' render={() => 'Home'}/>
        </div>
      </Router>
    )
  }
}