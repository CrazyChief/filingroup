import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

import store from 'store'
import ScrollToTop from 'components/ScrollToTop'

import Home from 'containers/Home'
import Blog from 'containers/Blog'
import Header from 'components/Header'
import Footer from 'components/Footer'
import NotFound from 'components/NotFound'
import ArticleModal from 'components/ArticleModal'

export default class App extends Component{
  static propTypes = {
  }
  state = {
    scrollIsHiden: true
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  render(){
    const {scrollIsHiden} = this.state
    return(
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <div>
              <Route exact path='/' component={Home}/>
              <Switch>
                <Route path='/blog/' render={({match}) => <Blog match={match} />}/>
                <Route exact path='/:id' render={({match}) => <ArticleModal match={match}/>}/>
                <Route exact path='/feedbacks' render={() => <h2>feedbacks</h2>}/>
                <Route exact path='/about' render={() => <h2>About</h2>}/>
                <Route exact path='/products' render={() => <h2>Products</h2>}/>
                <Route path='*' component={NotFound}/>
              </Switch>
            </div>
            <ScrollToTop hidenScroll={scrollIsHiden} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
  handleScroll = e => {
    let pageYOffset = window.pageYOffset
    
    if(pageYOffset >= 333){
      if(this.state.scrollIsHiden){
        this.setState({
          scrollIsHiden: false
        })
      }
    }else{
      if(!this.state.scrollIsHiden){
        this.setState({
          scrollIsHiden: true
        })
      }
    }
  }
}