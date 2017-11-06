import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

import ParticledElement from 'components/ParticledElement'

export default function FifthSection() {
  return(
    <section className="home__fifth-section">
      <ParticledElement height="100%" />
      <div className="container home__fifth-container">
        <div className="macbook__pic">
          <img src="assets/img/main/macbook.png" alt="macbook"/>
          <a href="#" className="get__link banner__get-link">
            <FontAwesome name="play-circle-o" />
            Получить доступ к видео
          </a>
        </div>
        <h2 className="home__fifth-title bold">
          Посмотрите видео о том, как найти 
          <span className="orange"> товар для успешного </span>
           старта на <img src="assets/img/main/arrow.png" alt="amazon"/>
        </h2>
      </div>
    </section>
  )
}