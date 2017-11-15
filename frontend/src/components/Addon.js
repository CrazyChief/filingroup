import React from 'react'
import PropTypes from 'prop-types'

export default function Addon() {
  return(
    <form action="#" className="addon" style={{backgroundImage: `url('/assets/img/blog/addon-bg.png')`}}>
      <img className="centered" src="/assets/img/main/amazon-black.png" alt="amazon"/>
      <p>
        <strong> Узнайте как найти товар для успешного старта на Амазон.</strong>
        <div>Бизнес практикум</div>
      </p>
      <input type="text" placeholder="Ваше имя"/>
      <input type="email" placeholder="Ваш e-mail"/>
      <button className="centered" type="submit">Получить</button>
    </form>
  )
}