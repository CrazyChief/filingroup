import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {postUser} from 'actions'

class Addon extends Component {
  render(){
    return(
      <form 
        action="#" 
        onSubmit={this.handleSubmit}
        className="addon" 
        style={{backgroundImage: `url('/static/dist/assets/img/blog/addon-bg.png')`}}>
        <img 
          className="centered" 
          src="/static/dist/assets/img/main/amazon-black.png" 
          alt="amazon"/>
        <p>
          <strong> Узнайте как найти товар для успешного старта на Амазон.</strong>
          <div>Бизнес практикум</div>
        </p>
        <input 
          type="text" 
          placeholder="Ваше имя"/>
        <input 
          type="email" 
          placeholder="Ваш e-mail"/>
        <button 
          className="centered" 
          type="submit">Получить
        </button>
      </form>
    )
  }

  handleSubmit = e => {
    const {postUser} = this.props
    const data = {}
    e.preventDefault()

    data.name = e.target[0].value
    data.email = e.target[1].value
    console.log(data)
    postUser(data)
  }
}

export default connect(null, {postUser})(Addon)