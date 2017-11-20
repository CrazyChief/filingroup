import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

import store from 'store'
import ScrollToTop from 'components/ScrollToTop'

import Home from 'containers/Home'
import Blog from 'containers/Blog'
import Feedbacks from 'containers/Feedbacks'
import About from 'containers/About'
import PPS from 'containers/PPS'
import Agreements from 'containers/Agreements'
import Denials from 'containers/Denials'
import Siterules from 'containers/Siterules'
import Products from 'containers/Products'
import Header from 'components/Header'
import Footer from 'components/Footer'
import NotFound from 'components/NotFound'
import ArticleModal from 'components/ArticleModal'
import ProductModal from 'components/ProductModal'
import LeaveFeedback from 'components/LeaveFeedback'

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
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/feedbacks' component={Feedbacks}/>
                <Route exact path='/feedbacks/leave-feedback' component={LeaveFeedback}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/products' component={Products}/>
                <Route exact path='/blog/' component={Blog}/>
                <Route exact path='/pps' component={PPS}/>
                <Route exact path='/agreements' component={Agreements}/>
                <Route exact path='/denials' component={Denials}/>
                <Route exact path='/siterules' component={Siterules}/>
                <Route exact path='/blog/:slug' render={({match}) => <ArticleModal match={match}/>}/>
                <Route exact path='/products/:slug' render={(({match}) => <ProductModal match={match}/>)} />
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