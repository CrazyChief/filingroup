import React from 'react'
import PropTypes from 'prop-types'

export default function ProductItem({product}) {
  const {title, picPath, price, discount, emptyPlaces} = product
  return(
    <div>
      <div className="product__top-wrap">
        <div className="product__pic-wrap">
          <img src={picPath} alt="product" className="product__img"/>
        </div>
        <div className="product__discount">{discount}</div>
        <div className="product__places">{emptyPlaces}</div>
      </div>
      <div className="product__main">
        <h4 className="product__title">{title}</h4>
        <div className="product__price">Цена: {price}</div>
        <a href="#" className="product__more-link">Детальнее</a>
      </div>
    </div>
  )
}