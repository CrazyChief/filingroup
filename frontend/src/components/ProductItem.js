import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

export default function ProductItem({product}) {
  const {title, slug, course_type, discount, places, free_places, price} = product
  return(
    <div>
      <div className="product__top-wrap">
        <div className="product__pic-wrap">
          <img src={getPic(course_type)} alt="product" className="product__img"/>
        </div>
        <div className="product__discount">{discount}</div>
        <div className="product__places">{free_places}</div>
      </div>
      <div className="product__main">
        <h4 className="product__title">{title}</h4>
        <div className="product__price">Цена: {getPrice(price, course_type)}</div>
        <NavLink to={`/products/${slug}`} className="product__more-link">Детальнее</NavLink>
      </div>
    </div>
  )
}

function getPrice(price, params) {
  switch (params) {
    case 1:
      return `${price}$ / 1 курс`

    case 2:
      return `${price}$ / в месяц`

    case 3:
      return `${price}$ / в час`
  }
}

function getPic(params) {
  switch(params){
    case 1:
      return '/assets/img/pic-1.png'

    case 2:
      return '/assets/img/pic-2.png'

    case 3:
      return '/assets/img/pic-3.png'
  }
}