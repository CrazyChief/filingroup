import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

function ProductModal({match, products}) {
  const {id} = match.params
  const currentProduct = products.get(id)
  const {title, picPath, price, emptyPlaces} = currentProduct
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
            <NavLink exact activeClassName='active' to={`/products/${id}`}>{title}</NavLink>
          </li>
        </ul>
        <h1 className="section__title">{title}</h1>
        <div className="product__modal-main">
          <div className="product__modal-left">
            <img src={picPath} alt=""/>
          </div>
          <div className="product__modal-right"></div>
        </div>
      </section>
    </main>
  )
}

export default connect(({products}) => ({products}), null)(ProductModal)