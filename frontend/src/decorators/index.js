import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'canvas-particle-network/particle-network.min.js'

export default (OriginalComponent, height = '100px') => class ParticleWrap extends Component{

  render(){
    return(
      <OriginalComponent 
          {...this.props} 
          {...this.state} 
      />
    )
  }
}