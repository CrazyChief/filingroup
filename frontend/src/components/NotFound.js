import React from 'react'
import PropTypes from 'prop-types'

const headerStyle = {
  fontSize: 24,
}

export default function NotFound() {
  return(
    <main className="main">
      <div className="notfound__wrap">
        <h3 className="notfound__title">Страница не найдена</h3>
        <img className="notfound__img" src="/static/dist/assets/img/404.png" alt=""/>
        <div className="notfound__info">Упс..похоже страница потерялась во время доставки</div>
      </div>
    </main>
  )
}