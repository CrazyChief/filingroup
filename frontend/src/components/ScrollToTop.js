import React, {Component} from 'react'
import PropTypes from 'prop-types'
import scrollToComponent from 'react-scroll-to-component'
import FontAwesome from 'react-fontawesome'

export default class ScrollToTop extends Component {
  render(){
    const {hidenScroll} = this.props
    return(
      <div>
        <a 
          className={`scroll__toTop-link ${hidenScroll?'hiden':''}`} 
          onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 500, ease:'inQuad'})}>
          <FontAwesome name="hand-o-up" />
        </a>
        <section 
          className='violet' 
          ref={(section) => { this.Violet = section }}>Violet</section>
      </div>
    )
  }
}
