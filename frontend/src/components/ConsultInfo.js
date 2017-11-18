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
    description,
    consulting_time,
    consulting_time_availability_on_this_week
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
        <span className="bold">Время консультации:
        </span>
        <span>{consulting_time}</span>
      </li>
      <li className="product__info-item">
        <span className="bold">Время на этой неделе:
        </span>
        <span 
          className={`${consulting_time_availability_on_this_week?'green':'red'}`}>
          {consulting_time_availability_on_this_week?"Доступно":"Занято"}
        </span>
      </li>
    </div>
  )
}