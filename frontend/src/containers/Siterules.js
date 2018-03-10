import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {loadSiterules} from 'actions'
import {createMarkup} from '../helpers'

import Loader from 'components/Loader'

class Siterules extends Component {
  static propTypes = {
  }

  componentDidMount = () => {
    const {loaded, loading, loadSiterules} = this.props
    if(!loaded && !loading) loadSiterules()
  }

  render(){
    const {loaded, loading, siterules} = this.props
    if(!loaded) return <Loader />
    const {
      id,
      title,
      content
    } = siterules[0]
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
    siterules: state.siterules.entities,
    loading: state.siterules.loading,
    loaded: state.siterules.loaded
  }
}, {loadSiterules})(Siterules)