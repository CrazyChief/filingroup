import React from 'react'
import PropTypes from 'prop-types'
import scrollToComponent from 'react-scroll-to-component'

import {createMarkup} from '../helpers'

export default function ProductPrivileges({privelege, toScroll}) {
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
          onClick={() => scrollToComponent(toScroll, { offset: 0, align: 'top', duration: 500, ease:'inQuad'})}
          className="centered privilege__register-btn">
          <i className="fa fa-check-circle-o"/>
          Записаться
        </a>
      </div>
    </li>
  )
}