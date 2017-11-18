import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import './style.scss'

export default function Footer() {
  return(
    <footer className="footer">
      <div className="container header__container footer__container">
        <div className="logo">
          <NavLink exact activeClassName='active' to='/'>
            <img src="assets/img/logo.png" alt="logo"/>
          </NavLink>
        </div>
        <ul className="references__list">
          <li className="reference__item">
            <NavLink to='/pps' className="reference__link">Политика конфиденциальности</NavLink>
          </li>
          <li className="reference__item">
            <a href="#" className="reference__link">Отказ от ответственности</a>
          </li>
          <li className="reference__item">
            <a href="#" className="reference__link">Согласие на рассылку</a>
          </li>
          <li className="reference__item">
            <a href="#" className="reference__link">Правила пользования сайтом</a>
          </li>
        </ul>
        <ul className="phone__list">
          <li className="phone__item">
            <a href="tel: +77073510406" className="phone__link">
              <FontAwesome name="phone" />
              <span className="tb__hide">+7 (707) 351-04-06</span>
              <span className="phone__link-number">1</span>
            </a>
          </li>
          <li className="phone__item">
            <a href="tel: +380947122007" className="phone__link">
              <FontAwesome name="phone" />
              <span className="tb__hide">+38(094)712-20-07</span>
              <span className="phone__link-number">2</span>
            </a>
          </li>
        </ul>
        <a href="to: mail@filingroup.com" className="mail__link">
          <FontAwesome name="envelope" />
          <span className="tb__hide">mail@filingroup.com</span>
        </a>
      </div>
    </footer>
  )
}