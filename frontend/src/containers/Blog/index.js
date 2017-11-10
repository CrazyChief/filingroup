import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import './style.scss'
import {ObjToImmArr} from '../../helpers'

import ArticleItem from 'components/ArticleItem'

class Blog extends Component{
  static propTypes = {
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
                  <NavLink activeClassName='active' to='/blog'>Блог</NavLink>
                </li>
              </ul>
              <h1 className="section__title">Блог</h1>
              <ul className="articles__list">
                {this.getBody()}
              </ul>
            </div>
            <div className="blog__right"></div>
          </section>
        </div>
      </main>
    )
  }

  getBody = () => {
    const {articles} = this.props

    return ObjToImmArr(articles).map(item => {
      return <li key={item.id} className="article__item">
        <ArticleItem article={item} />
      </li>
    })
  }
}

export default connect(({articles}) => ({articles}), null)(Blog)