import React from 'react'
import PropTypes from 'prop-types'

import ParticleWrap from 'decorators'

function ParticledElement() {
  return(
    <div className="particled__elem" />
  )
}

export default ParticleWrap(ParticledElement, 215)