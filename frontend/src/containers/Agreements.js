import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {loadAgreements} from 'actions'
import {createMarkup} from '../helpers'

import Loader from 'components/Loader'

class Agreements extends Component{
  static propTypes = {
  }

  componentDidMount = () => {
    const {loaded, loading, loadAgreements} = this.props
    if(!loaded && !loading) loadAgreements()
  }

  render(){
    const {loaded, loading, agreements} = this.props
    if(!loaded) return <Loader />
    const {
      id,
      title,
      content
    } = agreements[0]
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
    agreements: state.agreements.entities,
    loading: state.agreements.loading,
    loaded: state.agreements.loaded
  }
}, {loadAgreements})(Agreements)