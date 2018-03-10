import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import './style.scss'
import {loadPPS} from 'actions'
import {createMarkup} from '../../helpers'

import Loader from 'components/Loader'

class PPS extends Component{
  static propTypes = {
  }

  componentDidMount = () => {
    const {loaded, loading, loadPPS} = this.props
    if(!loaded && !loading) loadPPS()
  }

  render(){
    const {loaded, loading, pps} = this.props
    if(!loaded) return <Loader />
    const {
      id,
      title,
      content
    } = pps[0]
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
    pps: state.pps.entities,
    loading: state.pps.loading,
    loaded: state.pps.loaded
  }
}, {loadPPS})(PPS)