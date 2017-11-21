import React from 'react'
import PropTypes from 'prop-types'

export default function CourseInfo({currentProduct}) {
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
    description
  } = currentProduct
  const newPrice = price - (price * + `.${discount.percents}`)
  return(
    <div>
      <li className="product__info-item">
        <span className="bold">Цена:
        </span>
        <span className="green">{newPrice + '$'}</span>
      </li>
      <li className="product__info-item">
        <span className="bold">Старая цена:
        </span>
        <span className="red">{price + '$'}</span>
      </li>
      <li className="product__info-item">
        <span className="bold">Курс ведет:
        </span>
        <span>{`${teachers[0].first_name} ${teachers[0].last_name}`}</span>
      </li>
      <li className="product__info-item">
        <span className="bold">Мест осталось :
        </span>
        <span>{free_places}</span>
      </li>
      <a href="#" className="privilege__register-btn">
        <i className="fa fa-check-circle-o"/>
        Записаться
      </a>
    </div>
  )
}