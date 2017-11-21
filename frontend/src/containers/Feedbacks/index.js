import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Masonry from 'react-masonry-component'

import {ObjToImmArr} from '../../helpers'
import './style.scss'
import {loadAllFeedbacks} from 'actions'

import FeedbackItem from 'components/FeedbackItem'
import Loader from 'components/Loader'

class Feedbacks extends Component{
  static propTypes = {
    feedbacks: PropTypes.array.isRequired
  }

  state = {
    step: 4
  }

  componentDidMount() {
    const {loaded, loading, loadAllFeedbacks} = this.props
    if (!loaded && !loading) loadAllFeedbacks()
  }

  render(){
    const {feedbacks, loading, loaded, next} = this.props
    const masonryOptions = {}
    if(loading) return <Loader />
    return(
      <main className='main'>
        <section className="section feedback container">
          <ul className="breadcrumb__list">
            <li className="breadcrumb__item">
              <NavLink exact activeClassName='active' to='/'>Главная</NavLink>
            </li>
            <li className="breadcrumb__item">
              <NavLink activeClassName='active' to='/feedbacks'>Отзывы</NavLink>
            </li>
          </ul>
          <div className="feedback__header">
            <h1 className="section__title">Отзывы</h1>
            <NavLink to="/feedbacks/leave-feedback" className="leave__feedback-btn">Оставить отзыв</NavLink>
          </div>
          <Masonry
            className={'feedback__list'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {this.getBody()}
          </Masonry>
          {this.getMoreFeedbacks()}
        </section>
      </main>
    )
  }
  getMoreFeedbacks = () => {
    const {next} = this.props

    if(next){
      return <a 
              href="" 
              onClick={this.nextPage} 
              className="feedback__next-link">
                <i className="fa fa-caret-down"></i>
                  Больше отзывов
                <i className="fa fa-caret-down"></i>
            </a>
    }
  }

  nextPage = e => {
    const {loadAllFeedbacks, next} = this.props
    e.preventDefault()

    loadAllFeedbacks(next)
  }

  getBody = () => {
    const {feedbacks} = this.props
    const {step} = this.state

    return feedbacks.map(feedback => {
      return <li key={feedback.date_added} className="feedback__item">
        <FeedbackItem feedback={feedback} />
      </li>
    })
  }
}

export default connect((state) => {
  return{
    feedbacks: ObjToImmArr(state.feedbacks.entities),
    next: state.feedbacks.next,
    loaded: state.feedbacks.loaded,
    loading: state.feedbacks.loading
  }
}, {loadAllFeedbacks})(Feedbacks)