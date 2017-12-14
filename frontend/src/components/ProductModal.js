import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Masonry from 'react-masonry-component'
import scrollToComponent from 'react-scroll-to-component'

import {ObjToImmArr, createMarkup} from '../helpers'
import {loadPriveleges} from 'actions'

import Loader from 'components/Loader'
import ProductPrivileges from 'components/ProductPrivileges'
import CourseInfo from 'components/CourseInfo'
import CouchInfo from 'components/CouchInfo'
import ConsultInfo from 'components/ConsultInfo'
import RegisterForm from 'components/RegisterForm'

class ProductModal extends Component {
  state = {
    privilegeState: null
  }
  componentDidMount = () => {
    const {loading, loaded, loadPriveleges} = this.props
    if(!loading && !loaded) loadPriveleges()
  }

  render(){
    const {privilegeState} = this.state
    const {priveleges, products, match, loading} = this.props
    const currentProduct = products.get(match.params.slug)
    const masonryOptions = {}
    const {
      id,
      title,
      slug,
      course_type,
      course_picture,
      discount,
      places,
      free_places,
      price,
      teachers,
      description
    } = currentProduct
    if(loading) return <Loader />
    return (
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
              <img
                className="product__modal-pic"
                src={course_picture}
                alt="product"/>
              <ul className="product__modal-info">
                {this.getProductInfo(currentProduct)}
              </ul>
            </div>
            <div className="product__modal-right">
              <div dangerouslySetInnerHTML={createMarkup(description)}/>
            </div>
          </div>
          <Masonry
            className={'product__privileges-list'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {priveleges.map(privelege => {
              return privelege.courses.map(course => {
                if(course.id === id) return <ProductPrivileges toScroll={this.reg} that={this} key={privelege.id} privelege = {privelege} />
              })
            })}
            <div>
          <p>
            Для участия нажмите кнопку "Записаться", под курсом, который выбрали, или заполните заявку.
С вами свяжется менеджер для уточнения деталей.
          </p>
        </div>
          </Masonry>
        </section>
        <RegisterForm ref={reg => {this.reg = reg}} courseId={id} privilege={privilegeState} />
      </main>
    )
  }
  getProductInfo = (currentProduct) => {
    const {course_type} = currentProduct
    switch(course_type.title){
      case "Коучинг":
        return <CouchInfo toScroll={this.reg} currentProduct={currentProduct}/>
      case "Консультация":
        return <ConsultInfo toScroll={this.reg} currentProduct={currentProduct}/>
      default:
        return <CourseInfo toScroll={this.reg} currentProduct={currentProduct}/>
    }
  }
}

export default connect(state => {
  return {
    products: state.products.entities,
    priveleges: ObjToImmArr(state.priveleges.entities),
    loading: state.priveleges.loading,
    loaded: state.priveleges.loaded
  }
}, {loadPriveleges})(ProductModal)