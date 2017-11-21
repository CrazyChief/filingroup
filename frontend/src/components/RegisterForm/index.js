import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import './style.scss'

export default class RegisterForm extends Component{
  static propTypes = {
  }
  render(){
    return(
      <section className="register">
        <div className="black__whole">
          <div className="container">
            <h3 className="black__whole-title">
              Для участия заполните заявку.
              <br/>
              С вами свяжется менеджер для уточнения деталей
            </h3>
          </div>
        </div>
        <form className="register__form">
          <div className="container">
            <div className="form__content">
              <ul className="register__form-list">
                <li className="register__form-item">
                  <input type="text" placeholder="Имя*"/>
                </li>
                <li className="register__form-item">
                  <input type="email" placeholder="E-Mail*"/>
                </li>
                <li className="register__form-item">
                  <input type="text" placeholder="Номер телефона*"/>
                </li>
                <li className="register__form-item">
                  <input type="text" placeholder="Скайп*"/>
                </li>
              </ul>
              <button className="centered privilege__register-btn">
                <i className="fa fa-check-circle-o"/>
                Отправить
              </button>
              <label>
                <input type="checkbox" name="agreement"/>
                Я согласен(на) на обработку персональных данных
                <br/>
                * поля обязательны к заполнению
              </label>
            </div>
          </div>
        </form>
        <NavLink className="orange__btn" to='/feedbacks'>
          Читать отзывы предыдущих учасников
        </NavLink>
        <div className="phone__contaier">
          <div className="phone__wrap">
            <img src="/assets/img/products/phone.png" alt="phone"/>
          </div>
        </div>
      </section>
    )
  }
}