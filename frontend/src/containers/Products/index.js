import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Masonry from 'react-masonry-component'

import './style.scss'
import {ObjToImmArr} from '../../helpers'
import {loadAllCourses} from 'actions'

import ProductItem from 'components/ProductItem'
import Loader from 'components/Loader'

class Products extends Component{
  static propTypes = {
    products: PropTypes.array.isRequired
  }
  
  componentDidMount() {
    const {loaded, loading, loadAllCourses} = this.props
    if (!loaded && !loading) loadAllCourses()
  }

  render(){
    const {products, loading, loaded} = this.props
    const masonryOptions = {}
    if(loading) return <Loader />
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
      const {slug} = product
      return <li key={slug} className="product__item">
        <ProductItem product={product}/>
      </li>
    })
  }
}

export default connect(state => {
  return{
    products: ObjToImmArr(state.products.entities),
    loading: state.products.loading,
    loaded: state.products.loaded
  }
}, {loadAllCourses})(Products)