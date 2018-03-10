import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {ObjToImmArr} from '../helpers'
import {loadCategories, loadCategoryArticles} from 'actions'

import Addon from 'components/Addon'
import FacebookSubscribe from 'components/FacebookSubscribe'

class BlogSideBar extends Component {
  componentDidMount = () => {
    const {loaded, loading, loadCategories} = this.props
    if(!loaded && !loading) loadCategories()
  }

  render(){
    const {articles, categories, loaded} = this.props
    const lastArticles = ObjToImmArr(articles)
    return(
      <div>
        <Addon />
        <FacebookSubscribe />
        <h3 className="sidebar__titile">Последние статьи</h3>
        <ul className="last__articles-list">
          {lastArticles.map(article => {
            const {slug, title, announce, author, category, content, cover_picture, date_added} = article
            return <li key={slug} className="last__article-item">
              <h4>{title.slice(0, 55)}</h4>
              <div>{date_added.slice(0, date_added.indexOf('T'))}</div>
              <img src={cover_picture} alt="cover pic"/>
              <NavLink to={`/article/${slug}`}>Читать далее</NavLink>
            </li>
          })}
        </ul>
        <h3 className="sidebar__titile">Категории</h3>
        <ul className="categories__list">
          {categories.map(category => {
            const {id, title, slug} = category
            return <li key={id} className="category__item">
              <a 
                href="" 
                onClick={this.handleClick(slug)}
                className="category__link">
                {title}
              </a>
            </li>
          })}
        </ul>
      </div>
    )
  }

  handleClick = (slug) => e => {
    e.preventDefault()
    const {loadCategoryArticles} = this.props

    loadCategoryArticles(slug)
  }
}

export default connect(state => ({
  categories: ObjToImmArr(state.categories.entities),
  loading: state.categories.loading,
  loaded: state.categories.loaded
}), {loadCategories, loadCategoryArticles})(BlogSideBar)