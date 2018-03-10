import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import './style.scss'
import {loadAbout} from 'actions'
import {createMarkup} from '../../helpers'

import Loader from 'components/Loader'
import VideoBtn from 'components/VideoBtn'

class About extends Component{
  static propTypes = {
  }

  componentDidMount = () => {
    const {loaded, loading, loadAbout} = this.props
    if(!loaded && !loading) loadAbout()
  }

  render(){
    const {loaded, loading, about} = this.props
    if(!loaded) return <Loader />
    const {
      id,
      title,
      logo,
      text
    } = about[0]
    return(
      <main className="main">
        <section className="section about container">
          <ul className="breadcrumb__list">
            <li className="breadcrumb__item">
              <NavLink exact activeClassName='active' to='/'>Главная</NavLink>
            </li>
            <li className="breadcrumb__item">
              <NavLink activeClassName='active' to='/about'>О нас</NavLink>
            </li>
          </ul>
          <h1 className="section__title">О нас</h1>
          <div className="about__pic">
            <img src={logo} alt="logo" className="about__img"/>
          </div>
          <div dangerouslySetInnerHTML={createMarkup(text)} />
          <VideoBtn classToAdd="centered"/>
        </section>
      </main>
    )
  }
}

export default connect(state => {
  return {
    about: state.about.entities,
    loading: state.about.loading,
    loaded: state.about.loaded
  }
}, {loadAbout})(About)