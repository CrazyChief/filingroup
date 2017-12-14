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
            <img src="/static/dist/assets/img/logo.png" alt="logo"/>
          </NavLink>
        </div>
        <ul className="references__list">
          <li className="reference__item">
            <NavLink to='/pps' className="reference__link">Политика конфиденциальности</NavLink>
          </li>
          <li className="reference__item">
            <NavLink to='/denials' className="reference__link">Отказ от ответственности</NavLink>
          </li>
          <li className="reference__item">
            <NavLink to='/agreements' className="reference__link">Согласие на рассылку</NavLink>
          </li>
          <li className="reference__item">
            <NavLink to='/siterules' className="reference__link">Правила пользования сайтом</NavLink>
          </li>
        </ul>
        <ul className="phone__list">
          <li className="phone__item">
              <a href="tel: +380443343679" className="phone__link">
                <FontAwesome name="phone" />
                <span className="tb__hide">+38 044 334-36-79 Киев</span>
                <span className="phone__link-number">1</span>
              </a>
            </li>
            <li className="phone__item">
              <a href="tel: +77273506142" className="phone__link">
                <FontAwesome name="phone" />
                <span className="tb__hide">+7 727 350-61-42 Алматы</span>
                <span className="phone__link-number">2</span>
              </a>
            </li>
            <li className="phone__item">
              <a href="tel: +74993488016" className="phone__link">
                <FontAwesome name="phone" />
                <span className="tb__hide">+7 499 348-80-16 Москва</span>
                <span className="phone__link-number">1</span>
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