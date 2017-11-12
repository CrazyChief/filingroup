import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Masonry from 'react-masonry-component'

import './style.scss'
import {ObjToImmArr} from '../../helpers'

import ProductItem from 'components/ProductItem'

class Products extends Component{
  static propTypes = {
    products: PropTypes.array.isRequired
  }

  render(){
    const masonryOptions = {}
    return(
      <main className="main">
        <section className="section products container">
          <ul className="breadcrumb__list">
            <li className="breadcrumb__item">
              <NavLink exact activeClassName='active' to='/'>Главная</NavLink>
            </li>
            <li className="breadcrumb__item">
              <NavLink activeClassName='active' to='/products'>Продукты</NavLink>
            </li>
          </ul>
          <h1 className="section__title">Наши продукты</h1>
          <Masonry
            className={'products__list'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {this.getBody()}
          </Masonry>
        </section>
      </main>
    )
  }

  getBody = () => {
    const {products} = this.props

    return products.map(product => {
      return <li key={product.id} className="product__item">
        <ProductItem product={product}/>
      </li>
    })
  }
}

export default connect(state => ({
  products: ObjToImmArr(state.products)
}), null)(Products)