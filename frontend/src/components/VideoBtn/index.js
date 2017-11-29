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
      <div onClick={this.handleClick} className="video__btn-wrap">
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
            acceptCharset="utf-8" 
            action="https://app.getresponse.com/add_subscriber.html"
            className="get__video-content"
            target="_blank" 
            method="post">
            <h4 className="get__video-title">Оставьте свои данные, чтобы получить доступ к видеозаписи</h4>
            <ul className="get__video-list">
              <li className="get__video-item">
                <FontAwesome name="user"/>
                <input type="text" name="name" placeholder="Введите ваше имя"/>
              </li>
              <li className="get__video-item">
                <FontAwesome name="phone"/>
                <input type="text" name="phone" placeholder="Введите ваш телефон"/>
              </li>
              <li className="get__video-item">
                <FontAwesome name="envelope"/>
                <input type="email" name="email" placeholder="Введите ваш email"/>
              </li>
            </ul>
            <input type="hidden" name="campaign_token" value="TjveQ" />
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

    data.name = e.target[0].value
    data.phone = e.target[1].value
    data.email = e.target[2].value
    postUser(data)
  }

  handleClick = e => {
    const block = $('.get__video-content')
    if(this.state.isOpen == true){
      if (!block.is(e.target) && block.has(e.target).length === 0){
        this.setState({
          isOpen: false
        })
      }
    }
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