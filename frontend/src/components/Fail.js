import React from 'react'
import PropTypes from 'prop-types'
import history from '../history'
import {NavLink} from 'react-router-dom'

export default function Fail() {
  return(
    <main className="main pps">
      <div
        className="container"
        style={{
        paddingTop: 50,
        paddingBottom: 50
      }}>
        <ul className="breadcrumb__list">
          <li className="breadcrumb__item">
            <NavLink exact activeClassName='active' to='/'>Главная</NavLink>
          </li>
          <li className="breadcrumb__item">
            <NavLink exact activeClassName='active' to='/thanks'>Ошибка</NavLink>
          </li>
        </ul>
        <div className="thanks">
          <h1 style={{paddingTop: 50}}> Пожалуйста проверьте введенные данные </h1>
          <a className="article__btn" onClick={goBack}>Назад</a>
        </div>
      </div>
    </main>
  )
}

function goBack() {
  history.goBack()
}