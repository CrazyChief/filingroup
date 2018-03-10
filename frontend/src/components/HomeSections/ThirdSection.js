import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const style = {
  backgroundImage: `url('/static/dist/assets/img/main/man.png')`
}

export default function ThirdSection() {
  return(
    <section className="home__third-section" style={style}>
      <div className="home__third-content container">
        <h2 className="banner__title">
          <b>Filin Group </b>
          помогают предпринимателям со всего мира наладить поставки и продажи товаров на 
          <img src="/static/dist/assets/img/main/arrow.png" alt="amazon"/>
        </h2>
        <NavLink to='/feedbacks' className="get__link">
          Читать отзывы
        </NavLink>
      </div>
    </section>
  )
}