import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {ObjToImmArr} from '../helpers'

import ArticleItem from 'components/ArticleItem'
import Pagination from 'components/Pagination'

export default class Articles extends Component{
  static propTypes = {
    match: PropTypes.object.isRequired,
    articles: PropTypes.object.isRequired
  }

  state = {
    beginPoint: 0,
    endPoint: 4
  }
  
  render(){
    const {match} = this.props
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
    const {articles, match} = this.props
    let {beginPoint, endPoint} = this.state
    endPoint = endPoint * match.params.page
    beginPoint = endPoint - 4

    return ObjToImmArr(articles).map(item => {
      return <li key={item.slug} className="article__item">
        <ArticleItem article={item} />
      </li>
    })
  }
}