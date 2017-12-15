import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router, Route, Link, NavLink, Switch} from 'react-router-dom'
import history from '../history'
import ReactPixel from 'react-facebook-pixel'
import ReactGA from 'react-ga'
import { YMInitializer } from 'react-yandex-metrika'

import store from 'store'
import ScrollToTop from 'components/ScrollToTop'
import {ScrollToTopRoute} from 'decorators'

import Home from 'containers/Home'
import Blog from 'containers/Blog'
import Feedbacks from 'containers/Feedbacks'
import About from 'containers/About'
import PPS from 'containers/PPS'
import Agreements from 'containers/Agreements'
import Denials from 'containers/Denials'
import Siterules from 'containers/Siterules'
import Products from 'containers/Products'
import Thanks from 'containers/Thanks'
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
    ReactPixel.init('426948287675970')
    ReactPixel.pageView(window.location.pathname + window.location.search)
    ReactGA.initialize('UA-102584414-1')
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  render(){
    const {scrollIsHiden} = this.state
    return(
      <Provider store={store}>
        <Router history={history}>
          <div>
            <YMInitializer accounts={[44537083]} />
            <Header />
            <ScrollToTopRoute>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/feedbacks/leave-feedback' component={LeaveFeedback}/>
                <Route exact path='/blog/:slug' render={({match}) => <ArticleModal match={match}/>}/>
                <Route exact path='/products/:slug' render={(({match}) => <ProductModal match={match}/>)} />
                <Route path='/about' component={About}/>
                <Route path='/products/' component={Products}/>
                <Route path='/feedbacks' component={Feedbacks}/>
                <Route path='/blog/' component={Blog}/>
                <Route path='/pps' component={PPS}/>
                <Route path='/agreements' component={Agreements}/>
                <Route path='/denials' component={Denials}/>
                <Route path='/siterules' component={Siterules}/>
                <Route path='/thanks' component={Thanks} />
                <Route path='*' component={NotFound}/>
              </Switch>
            </ScrollToTopRoute>
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
  scrollToTop = e => {
    window.scrollTo(0, 0)
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
  }
}