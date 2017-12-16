import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import './style.scss'
import {postStudent} from 'actions'

class RegisterForm extends Component{
  static propTypes = {
  }

  state = {
    correctForm: true
  }

  render(){
    const {correctForm} = this.state
      const {privilege} = this.props
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
        <form 
          onSubmit={this.handleSubmit} 
          className="register__form"
          acceptCharset="utf-8" 
          action=""
          method="post">>
          <div className="container">
            <div className="form__content">
              <p style={{color: correctForm?'black':'red'}}>
                {correctForm?'':'Пожалуйста убедитесь что все заполнено корректно!'}
              </p>
              <ul className="register__form-list">
                <li className="register__form-item">
                  <input 
                    type="text" 
                    ref={name => {this.name = name}}
                    name="name"
                    placeholder="Имя*"/>
                </li>
                <li className="register__form-item">
                  <input 
                    type="email" 
                    ref={email => {this.email = email}}
                    name="email"
                    placeholder="E-Mail*"/>
                </li>
                <li className="register__form-item">
                  <input 
                    type="text" 
                    ref={phone => {this.phone = phone}}
                    name="custom_phone"
                    placeholder="Телефон* (+380930001122)"/>
                </li>
                <li className="register__form-item">
                  <input 
                    type="text" 
                    ref={skype => {this.skype = skype}}
                    name="custom_skype"
                    placeholder="Скайп*"/>
                </li>
              </ul>
              <button className="centered privilege__register-btn">
                <i className="fa fa-check-circle-o"/>
                Отправить
              </button>
              <label>
                <input 
                  type="checkbox" 
                  ref={checker => {this.checker = checker}} 
                  name="agreement"/>
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
            <img src="/static/dist/assets/img/products/phone.png" alt="phone"/>
          </div>
        </div>
      </section>
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    const {postStudent} = this.props
    const data = {}
    const {courseId} = this.props
    const {privilege} = this.props
    const {
      name,
      email,
      phone,
      skype,
      checker} = this

    if (name.value.length && email.value.length && phone.value.length && skype.value.length && isNaN(phone.value) == false && checker.checked) {
      this.setState({
        correctForm: true
      })
      
      data.name = name.value
      data.email = email.value
      data.phone = phone.value
      data.skype = skype.value
      data.courses = courseId

      if (privilege) {
        data.privilegeId = privilege
      }

      console.log(data)

      postStudent(data)
    }else{
      this.setState({
        correctForm: false
      })
    }
  }
}

export default connect(null, {postStudent})(RegisterForm)