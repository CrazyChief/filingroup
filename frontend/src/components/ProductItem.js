import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

export default function ProductItem({product}) {
  const {title, slug, course_type, discount, places, free_places, price} = product
  return(
    <div>
      <div className="product__top-wrap">
        <div className="product__pic-wrap">
          <img src='../assets/img/products/pic-1.png' alt="product" className="product__img"/>
        </div>
        <div className="product__discount">{`-${discount.percents}%`}</div>
        <div className="product__places">{`${free_places} ${placeGetter(free_places)}`}</div>
      </div>
      <div className="product__main">
        <h4 className="product__title">{title}</h4>
        <div className="product__price">Цена: {getPrice(price, course_type, discount.percents)}</div>
        <NavLink to={`/products/${slug}`} className="product__more-link">Детальнее</NavLink>
      </div>
    </div>
  )
}

function placeGetter(params) {
  switch (params) {
    case 1:
      return 'место'
    case 2 || 3 || 4:
      return 'места'
    default:
      return 'мест'
  }
}

function getPrice(price, params, discount) {
  const newPrice = price - (price * +`.${discount}`)
  switch (params.id) {
    case 1:
      return `${newPrice}$ / 1 курс`

    case 2:
      return `${newPrice}$ / в месяц`

    case 3:
      return `${newPrice}$ / в час`
  }
}