import React from 'react'
import PropTypes from 'prop-types'

import {createMarkup} from '../helpers'

export default function ProductPrivileges({privelege}) {
  const {
    id,
    type,
    courses,
    price,
    description,
    date_added
  } = privelege
  return(
    <li className="product__privileges-item">
      <h4 className="privilege__title">{type}</h4>
      <div className="privilege__content">
        <div className="privilege__price">{price + '$'}</div>
        <div dangerouslySetInnerHTML={createMarkup(description)}/>
        <a href="#" className="centered privilege__register-btn">
          <i className="fa fa-check-circle-o"/>
          Записаться
        </a>
      </div>
    </li>
  )
}