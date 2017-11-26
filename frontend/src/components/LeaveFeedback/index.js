import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Select from 'react-select'

import 'react-select/dist/react-select.css'
import './style.scss'

import {ObjToImmArr} from '../../helpers'
import {loadAllCourses, postFeedback} from 'actions'

import Loader from 'components/Loader'

class LeaveFeedback extends Component{
  static propTypes = {
  }

  state = {
    value: '',
    correctForm: true
  }

  componentDidMount() {
    const {loaded, loading, loadAllCourses, products} = this.props
    if (!loaded && !loading) loadAllCourses()
  }

  render(){
    const {products, loading, loaded, response} = this.props
    const { value, correctForm } = this.state
    if(!loaded) return <Loader />
    const options = products.map(product => ({
      label: product.title,
      value: product.id
    }))
    const validateStyle={
      border: correctForm?'':'1px solid red'
    }
    return(
      <main className="main">
        <section className="section container">
          <ul className="breadcrumb__list">
            <li className="breadcrumb__item">
              <NavLink exact activeClassName='active' to='/'>Главная</NavLink>
            </li>
            <li className="breadcrumb__item">
              <NavLink exact activeClassName='active' to='/feedbacks'>Отзывы</NavLink>
            </li>
            <li className="breadcrumb__item">
              <NavLink exact activeClassName='active' to='/feedbacks/leave-feedback'>Оставить отзыв</NavLink>
            </li>
          </ul>
          <h1 className="section__title">Оставить отзыв</h1>
          <form 
            action="#" 
            onSubmit={this.sendHandler} 
            className="feedback__form">
            <div style={{width: '100%', color: correctForm?'':'red'}}>
              {correctForm?'':'Заполните обязательные поля'}
            </div>
            <input 
              className="input" 
              style={validateStyle}
              ref={name => {this.name = name}}
              type="text" 
              name="firstName" 
              placeholder="Имя"/>
            <input 
              className="input" 
              style={validateStyle}
              ref={lastName => {this.lastName = lastName}}
              type="text" 
              name="lastName" 
              placeholder="Фамилия"/>
            <input 
              className="input" 
              style={validateStyle}
              ref={pic => {this.photo = pic}} 
              type="text" 
              name="avatar" 
              placeholder="Ссылка на аватар"/>
            <input 
              className="input" 
              ref={video => {this.video = video}} 
              type="text" 
              name="video" 
              placeholder="Ссылка на видео-отзыв"/>
            <label style={{color: correctForm?'#fff': 'red'}} className="column">
              Выберите курс: 
              <Select
                options={options} 
                value={value}
                onChange={this.valueChange}
              />
            </label>
            <input 
              className="input" 
              ref={facebook => {this.facebook = facebook}}
              type="text" 
              name="facebook" 
              placeholder="Facebook"/>
            <input 
              className="input" 
              ref={instagram => {this.instagram = instagram}}
              type="text" 
              name="instagram" 
              placeholder="Instagram"/>
            <input 
              className="input" 
              ref={linkedin => {this.linkedin = linkedin}}
              type="text" 
              name="linkedin" 
              placeholder="Linkedin"/>
            <input 
              className="input" 
              ref={vk => {this.vk = vk}}
              type="text" 
              name="vk" 
              placeholder="ВКонтакте"/>
            <textarea 
              style={validateStyle}
              ref={text => {this.text = text}}
              name="feedbackText" 
              placeholder="Отзыв"></textarea>
            <button 
              className="orange__btn">Отправить</button>
          </form>
        </section>
      </main>
    )
  }

  sendHandler = e => {
    e.preventDefault()
    const {postFeedback} = this.props
    const data = {}
    const {
      name, 
      lastName, 
      photo, 
      facebook, 
      instagram, 
      linkedin, 
      vk, 
      text, 
      video} = this
    const {value} = this.state
    
    if(name.value.length && lastName.value.length && text.value.length && photo.value.length && value !== ''){
      this.setState({
        correctForm: true
      })
      data['first_name'] = name.value
      data['last_name'] = lastName.value
      data['avatar'] = photo.value
      data['review'] = text.value
      data['course'] = value.value
      if(facebook.value.length) data['link_to_fb'] = facebook.value
      if(instagram.value.length) data['link_to_inst'] = instagram.value
      if(linkedin.value.length) data['link_to_linkedin'] = linkedin.value
      if(vk.value.length) data['link_to_vk'] = vk.value
      if(video.value.length) data['video'] = video.value

      postFeedback(data)
    }else{
      this.setState({
        correctForm: false
      })
    }
  }

  valueChange = val => {
    this.setState({
      value: val
    })
  }
}

export default connect(state => {
  return {
    response: state.feedbacks.response,
    products: ObjToImmArr(state.products.entities),
    loading: state.products.loading,
    loaded: state.products.loaded
  }
}, {loadAllCourses, postFeedback})(LeaveFeedback)