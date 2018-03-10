import React from 'react'
import PropTypes from 'prop-types'
import scrollToComponent from 'react-scroll-to-component'

import {createMarkup} from '../helpers'

export default function ProductPrivileges({privelege, toScroll, that}) {
  const {
    id,
    type,
    title,
    courses,
    price,
    description,
    date_added
  } = privelege
  return(
    <li className="product__privileges-item">
      <h4 className="privilege__title">{title}</h4>
      <div className="privilege__content">
        <div className="privilege__price">{price + '$'}</div>
        <div dangerouslySetInnerHTML={createMarkup(description)}/>
        <a 
          href="#" 
          onClick={handleClick.bind(that, toScroll, id)}
          className="centered privilege__register-btn">
          <i className="fa fa-check-circle-o"/>
          Записаться
        </a>
      </div>
    </li>
  )
}

function handleClick(toScroll, id) {
  scrollToComponent(toScroll, { offset: 0, align: 'top', duration: 500, ease:'inQuad'})
  this.setState({
      privilegeState: id
  })
}