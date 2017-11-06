import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'

import Home from 'containers/Home'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default class App extends Component{
  static propTypes = {
  }
  render(){
    return(
      <Router>
        <div>
          <Header />
          <div>
            <Route exact path='/' component={Home}/>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}