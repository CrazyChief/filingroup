import React from 'react'
import PropTypes from 'prop-types'
import scrollToComponent from 'react-scroll-to-component'

export default function CourseInfo({currentProduct, toScroll}) {
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
  const newPrice = discount?price - (price * + `.${discount.percents}`):price
  return(
    <div>
      <li className="product__info-item">
        <span className="bold">Цена:
        </span>
        <span className="green">{newPrice + '$'}</span>
      </li>
      {discount?<li className="product__info-item">
        <span className="bold">Старая цена:
        </span>
        <span className="red">{price + '$'}</span>
      </li>:null}
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
      {/*<a */}
        {/*href="#" */}
        {/*onClick={() => scrollToComponent(toScroll, { offset: 0, align: 'top', duration: 500, ease:'inQuad'})}*/}
        {/*className="privilege__register-btn">*/}
        {/*<i className="fa fa-check-circle-o"/>*/}
        {/*Записаться*/}
      {/*</a>*/}
    </div>
  )
}