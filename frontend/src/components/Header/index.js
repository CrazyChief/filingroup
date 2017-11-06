import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import './style.scss'

export default function Header() {
  return(
    <header className="header">
      <div className="container header__container">
        <div className="logo">
          <NavLink exact activeClassName='active' to='/'>
            <img src="assets/img/logo.png" alt="logo"/>
          </NavLink>
        </div>
        <nav className="mnu">
          <ul className="mnu__list">
            <li className="mnu__item">
              <NavLink activeClassName='active' to='/blog'>Блог</NavLink>
            </li>
            <li className="mnu__item">
              <NavLink activeClassName='active' to='/feedbacks'>Отзывы</NavLink>
            </li>
            <li className="mnu__item">
              <NavLink activeClassName='active' to='/about'>О нас</NavLink>
            </li>
            <li className="mnu__item">
              <NavLink activeClassName='active' to='/products'>Продукты</NavLink>
            </li>            
          </ul>
        </nav>
        <ul className="social__list">
          <li className="social__item">
            <a href="#" className="social__link">
              <FontAwesome name="facebook" />
            </a>
          </li>
          <li className="social__item">
            <a href="#" className="social__link">
              <FontAwesome name="instagram" />
            </a>
          </li>
          <li className="social__item">
            <a href="#" className="social__link">
              <FontAwesome name="youtube" />
            </a>
          </li>
          <li className="social__item">
            <a href="#" className="social__link">
              <FontAwesome name="vk" />
            </a>
          </li>
        </ul>
        <ul className="phone__list">
          <li className="phone__item">
            <a href="tel: +77073510406" className="phone__link">
              <FontAwesome name="phone" />
              +7 (707) 351-04-06
            </a>
          </li>
          <li className="phone__item">
            <a href="tel: +380947122007" className="phone__link">
              <FontAwesome name="phone" />
              +38(094)712-20-07
            </a>
          </li>
        </ul>
        <a href="to: mail@filingroup.com" className="mail__link">
          <FontAwesome name="envelope" />
          mail@filingroup.com
        </a>
      </div>
    </header>
  )
}