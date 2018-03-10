import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {loadDenials} from 'actions'
import {createMarkup} from '../helpers'

import Loader from 'components/Loader'

class Denials extends Component{
  static propTypes = {
  }

  componentDidMount = () => {
    const {loaded, loading, loadDenials} = this.props
    if(!loaded && !loading) loadDenials()
  }

  render(){
    const {loaded, loading, denials} = this.props
    if(!loaded) return <Loader />
    const {
      id,
      title,
      content
    } = denials[0]
    return(
      <main className="main pps">
        <div className="container" style={{paddingTop: 50, paddingBottom: 50}}>
          <div dangerouslySetInnerHTML={createMarkup(content)} />
        </div>
      </main>
    )
  }
}

export default connect(state => {
  return {
    denials: state.denials.entities,
    loading: state.denials.loading,
    loaded: state.denials.loaded
  }
}, {loadDenials})(Denials)