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
    couching_timing,
    couching_consult_time,
    couching_time_availability_on_this_month

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
        <span>{couching_timing}</span>
      </li>
      <li className="product__info-item">
        <span className="bold">Время консультации:
        </span>
        <span className="green">{couching_consult_time}</span>
      </li>
      <li className="product__info-item">
        <span className="bold">Время в этом месяце:
        </span>
        <span 
          className={`${couching_time_availability_on_this_month?'green':'red'}`}>
            {couching_time_availability_on_this_month?"Доступно":"Занято"}
        </span>
      </li>
      <a href="#" className="privilege__register-btn">
        <i className="fa fa-check-circle-o"/>
        Записаться
      </a>
    </div>
  )
}