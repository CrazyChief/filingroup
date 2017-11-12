import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Masonry from 'react-masonry-component'

import {ObjToImmArr} from '../../helpers'
import './style.scss'

import FeedbackItem from 'components/FeedbackItem'

class Feedbacks extends Component{
  static propTypes = {
    feedbacks: PropTypes.array.isRequired
  }

  state = {
    step: 4
  }

  render(){
    const {feedbacks} = this.props
    const masonryOptions = {}
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
            <a href="#" className="leave__feedback-btn">Оставить отзыв</a>
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
          <a 
            href="" 
            onClick={this.handleClick} 
            className="feedback__next-link"
          >
            <i className="fa fa-caret-down"></i>
            Больше отзывов
            <i className="fa fa-caret-down"></i>
          </a>
        </section>
      </main>
    )
  }

  handleClick = e => {
    e.preventDefault()

    this.setState({
      step: this.state.step + 4
    })
  }

  getBody = () => {
    const {feedbacks} = this.props
    const {step} = this.state

    return feedbacks.slice(0, step).map(feedback => {
      return <li key={feedback.id} className="feedback__item">
        <FeedbackItem feedback={feedback} />
      </li>
    })
  }
}

export default connect((state) => ({
  feedbacks: ObjToImmArr(state.feedbacks)
}), null)(Feedbacks)