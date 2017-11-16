import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {ObjToImmArr, createMarkup} from '../helpers'

function ProductModal({match, products}) {
  const currentProduct = products.get(match.params.slug)
  const {title, slug, course_type, discount, places, free_places, price, teachers, description} = currentProduct
  const newPrice = price - (price * +`.${discount.percents}`)
  return(
    <main className="main">
      <section className="section product__modal container">
        <ul className="breadcrumb__list">
          <li className="breadcrumb__item">
            <NavLink exact activeClassName='active' to='/'>Главная</NavLink>
          </li>
          <li className="breadcrumb__item">
            <NavLink exact activeClassName='active' to='/products'>Продукты</NavLink>
          </li>
          <li className="breadcrumb__item">
            <NavLink exact activeClassName='active' to={`/products/${slug}`}>{title}</NavLink>
          </li>
        </ul>
        <h1 className="section__title">{title}</h1>
        <div className="product__modal-main">
          <div className="product__modal-left">
            <img className="product__modal-pic" src='../assets/img/products/pic-1.png' alt="product"/>
            <ul className="product__modal-info">
              <li className="product__info-item">
                <span>Цена: </span>
                <span>{newPrice}</span>
              </li>
              <li className="product__info-item">
                <span>Старая цена: </span>
                <span>{price}</span>
              </li>
              <li className="product__info-item">
                <span>Курс ведет: </span>
                <span>{`${teachers[0].first_name} ${teachers[0].last_name}`}</span>
              </li>
              <li className="product__info-item">
                <span>Мест осталось : </span>
                <span>{free_places}</span>
              </li>
            </ul>
          </div>
          <div className="product__modal-right">
            <div dangerouslySetInnerHTML={createMarkup(description)} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default connect(state => {
  return {
    products: state.products.entities
  }
}, null)(ProductModal)