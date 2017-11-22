import React from 'react'
import PropTypes from 'prop-types'

export default function FourthSection() {
  return(
    <section className="section home__fourth-section">
      <div className="container home__fourth-container">
        <div className="home__fourth-pic">
          <img src="/static/dist/assets/img/main/layer-1.png" alt="success" className="home__fourth-img"/>
          <div className="tongue__item left">
            <p>С каждым годом <span className="orange bold">становится все сложнее</span> одновременно вести физический бизнес, путешествовать, уделять время семье и заниматься интересными хобби.</p>
          </div>
          <div className="tongue__item right">
            <p><span className="bold">Амазон</span> - это выбор осознанных личностей, сделав который вы сможете зарабатывать в $$$, путешествовать и наслаждаться жизнью.</p>
          </div>
        </div>
      </div>
    </section>
  )
}