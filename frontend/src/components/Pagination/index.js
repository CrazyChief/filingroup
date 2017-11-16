import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {loadAllArticles} from 'actions'
import './style.scss'

class Pagination extends Component {
  render(){
    const {loadAllArticles, next, prev} = this.props
     return(
        <div className="pagination">
          <a 
            onClick={this.prevPage} 
            className={`${prev?'active':''} pagination__btn pagination__prev`}>
            <i className="fa fa-angle-left"></i>
          </a>
          <a 
            onClick={this.nextPage} 
            className={`${next?'active':''} pagination__btn pagination__next`}>
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
    )
  }
  nextPage = e => {
    const {loadAllArticles, next} = this.props
    e.preventDefault()

    loadAllArticles(next)
  }

  prevPage = e => {
    const {loadAllArticles, prev} = this.props
    e.preventDefault()

    loadAllArticles(prev)
  }
}

export default connect(state => {
  return {
    next: state.articles.next,
    prev: state.articles.previous,
  }
}, {loadAllArticles})(Pagination)