import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import './style.scss'

import Articles from 'components/Articles'

class Blog extends Component{
  static propTypes = {
    articles: PropTypes.object.isRequired
  }
  render(){
    const {articles} = this.props
    return(
      <main className="main">
        <div className="container">
          <section className="section blog">
            <div className="blog__left">
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <NavLink exact activeClassName='active' to='/'>Главная</NavLink>
                </li>
                <li className="breadcrumb__item">
                  <NavLink activeClassName='active' to='/blog/1'>Блог</NavLink>
                </li>
              </ul>
              <h1 className="section__title">Блог</h1>
              <Route path='/blog/:page' render={({match}) => <Articles articles={articles} match={match}/>} />
            </div>
            <div className="blog__right"></div>
          </section>
        </div>
      </main>
    )
  }
}

export default connect(({articles}) => ({articles}), null)(Blog)