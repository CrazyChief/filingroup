import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import './style.scss'
import {loadAllArticles, loadCategories} from 'actions'

import Articles from 'components/Articles'
import BlogSideBar from 'components/BlogSideBar'
import Loader from 'components/Loader'

class Blog extends Component{
  static propTypes = {
    articles: PropTypes.object.isRequired
  }
  
  componentDidMount() {
    const {loaded, loading, loadAllArticles} = this.props
    if (!loaded && !loading) {
      loadAllArticles()
      loadCategories()
    }
  }

  render(){
    const {articles, loading, loaded} = this.props
    if(loading) return <Loader />
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
              <Articles articles={articles} />
            </div>
            <div className="blog__right">
              <BlogSideBar articles={articles} />
            </div>
          </section>
        </div>
      </main>
    )
  }
}

export default connect((state) => {
  return {
    articles: state.articles.entities,
    loading: state.articles.loading,
    loaded: state.articles.loaded
  }
}, {loadAllArticles, loadCategories})(Blog)