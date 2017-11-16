import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {ObjToImmArr} from '../helpers'

import ArticleItem from 'components/ArticleItem'
import Pagination from 'components/Pagination'

export default class Articles extends Component{
  static propTypes = {
    articles: PropTypes.object.isRequired
  }
  
  render(){
    return(
      <div>
        <ul className="articles__list">
          {this.getBody()}
        </ul>
        <Pagination />
      </div>
    )
  }

  getBody = () => {
    const {articles} = this.props

    return ObjToImmArr(articles).map(item => {
      return <li key={item.slug} className="article__item">
        <ArticleItem article={item} />
      </li>
    })
  }
}