import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

import './style.scss'

export default class VideoBtn extends Component{
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
          <div className="get__video-content">
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
            <a 
              href="#" 
              onClick={this.closeClickHandler} 
              className={`get__link`}>
              <FontAwesome name="play-circle-o" />
              Получить доступ к видео
            </a>
            <a 
              href="#" 
              onClick={this.closeClickHandler} 
              className="close">
              &times;
            </a>
          </div>
        </div>
      </div>
    )
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