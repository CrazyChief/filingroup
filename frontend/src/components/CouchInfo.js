import React from 'react'
import PropTypes from 'prop-types'

export default function CouchInfo({currentProduct}) {
  const {
    id,
    title,
    slug,
    course_type,
    discount,
    places,
    free_places,
    price,
    teachers,
    description,
    is_active
  } = currentProduct
  const newPrice = price - (price * + `.${discount.percents}`)
  return (
    <div>
      <li className="product__info-item">
        <span className="bold">Цена:
        </span>
        <span className="green">{newPrice + '$'}</span>
      </li>
      <li className="product__info-item">
        <span className="bold">Эксперт:
        </span>
        <span>{`${teachers[0].first_name} ${teachers[0].last_name}`}</span>
      </li>
      <li className="product__info-item">
        <span className="bold">Время:
        </span>
        <span>Нужно добавить время</span>
      </li>
      <li className="product__info-item">
        <span className="bold">Время консультации:
        </span>
        <span>Нужно добавить время</span>
      </li>
      <li className="product__info-item">
        <span className="bold">Время в этом месяце:
        </span>
        <span 
          className={`${is_active?'green':'red'}`}>
            {is_active?"Свободно":"Занято"}
        </span>
      </li>
    </div>
  )
}