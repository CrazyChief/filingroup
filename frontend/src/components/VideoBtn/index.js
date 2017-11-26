import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import {connect} from 'react-redux'

import './style.scss'
import {postUser} from 'actions'

class VideoBtn extends Component{
  static propTypes = {
  }

  state = {
    isOpen: false
  }

  render(){
    const {classToAdd} = this.props
    const {isOpen} = this.state
    return(
      <div className="video__btn-wrap">
        <a 
          href="#" 
          onClick={this.openClickHandler} 
          className={`get__link ${classToAdd?classToAdd:''}`}>
          <FontAwesome name="play-circle-o" />
          Получить доступ к видео
        </a>
        <div className={`get__video-wrap ${isOpen?'active':''}`}>
          <form 
            onSubmit={this.handleSubmit}
            action="#"
            className="get__video-content">
            <h4 className="get__video-title">Оставьте свои данные, чтобы получить доступ к видеозаписи</h4>
            <ul className="get__video-list">
              <li className="get__video-item">
                <FontAwesome name="user"/>
                <input type="text" placeholder="Введите ваше имя"/>
              </li>
              <li className="get__video-item">
                <FontAwesome name="phone"/>
                <input type="text" placeholder="Введите ваш телефон"/>
              </li>
              <li className="get__video-item">
                <FontAwesome name="envelope"/>
                <input type="email" placeholder="Введите ваш email"/>
              </li>
            </ul>
            <button
              type="submit" 
              style={{color: '#fff', border: 'none', cursor: 'pointer'}}
              className={`get__link`}>
              <FontAwesome name="play-circle-o" />
              Получить доступ к видео
            </button>
            <a 
              href="#" 
              onClick={this.closeClickHandler} 
              className="close">
              &times;
            </a>
          </form>
        </div>
      </div>
    )
  }

  handleSubmit = e => {
    const {postUser} = this.props
    const data = {}
    e.preventDefault()

    data.name = e.target[0].value
    data.phone = e.target[1].value
    data.email = e.target[2].value
    console.log(data)
    postUser(data)
  }

  openClickHandler = e => {
    e.preventDefault()

    this.setState({
      isOpen: true
    })
  }

  closeClickHandler = e => {
    e.preventDefault()

    this.setState({
      isOpen: false
    })
  }
}

export default connect(null, {postUser})(VideoBtn)