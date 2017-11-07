import React from 'react'
import PropTypes from 'prop-types'
import scrollToComponent from 'react-scroll-to-component'
import FontAwesome from 'react-fontawesome'

export default function ScrollToTop() {
  return(
    <div>
      <a className="scroll__toTop-link" onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500, ease:'inQuad'})}>
        <FontAwesome name="hand-o-up" />
      </a>
      <section className='violet' ref={(section) => { this.Violet = section }}>Violet</section>
    </div>
  )
}
