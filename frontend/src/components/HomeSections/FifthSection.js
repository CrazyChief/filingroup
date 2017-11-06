import React from 'react'
import PropTypes from 'prop-types'

import ParticledElement from 'components/ParticledElement'

export default function FifthSection() {
  return(
    <section className="section home__fifth-section">
      <ParticledElement />
      <div className="container home__fifth-container">
        <div className="macbook__pic">
          <img src="assets/img/main/macbook.png" alt="macbook"/>
        </div>
      </div>
    </section>
  )
}