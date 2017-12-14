import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'

import {postUser} from 'actions'

class Addon extends Component {
  render(){
    return(
      <form 
        onSubmit={this.handleSubmit}
        className="addon" 
        style={{backgroundImage: `url('/static/dist/assets/img/blog/addon-bg.png')`}}
        acceptCharset="utf-8" 
        action=""
        method="post">
        <img 
          className="centered" 
          src="/static/dist/assets/img/main/amazon-black.png" 
          alt="amazon"/>
        <p>
          <strong> Узнайте как найти товар для успешного старта на Амазон.</strong>
          <div>Посмотрите запись практикума прямо сейчас!</div>
        </p>
        <input 
          type="text"
          name="name"
          placeholder="Ваше имя"/>
        <input 
          type="email"
          name="email"
          placeholder="Ваш e-mail"/>
        <button 
          className="centered" 
          type="submit">Получить
        </button>
      </form>
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    const {postUser} = this.props
    const data = {}

    data.name = e.target[0].value
    data.email = e.target[1].value
    postUser(data)
  }
}

export default connect(null, {postUser})(Addon)