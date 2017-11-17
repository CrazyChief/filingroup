import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import './style.scss'
import {loadAbout} from 'actions'
import {ObjToImmArr, createMarkup} from '../../helpers'

import Loader from 'components/Loader'
import AboutMain from 'components/AboutMain'

class About extends Component{
  static propTypes = {
  }

  componentDidMount = () => {
    const {loaded, loading, loadAbout} = this.props
    if(!loaded && !loading) loadAbout()
  }

  render(){
    const {loading, about} = this.props
    if(loading) return <Loader />
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
          <AboutMain about={about} />
        </section>
      </main>
    )
  }
}

export default connect(state => {
  return {
    about: ObjToImmArr(state.about.entities),
    loading: state.about.loading,
    loaded: state.about.loaded
  }
}, {loadAbout})(About)