import React from 'react'
import PropTypes from 'prop-types'

export default function SecondSection() {
  return(
    <section className="section home__second-section">
      <div className="container">
        <ul className="home__second-list">
          <li className="home__second-item">
            <img src="/static/dist/assets/img/main/pic-1.png" alt=""/>
          </li>
          <li className="home__second-item">
            <div className="bubble bubble-right"></div>
            <p>Amazon – крупнейший в мире онлайн-магазин, на котором работают более <span className="orange bold">2.700.000 продавцов.</span></p>
          </li>
          <li className="home__second-item">
            <div className="bubble bubble-left"></div>
            <p>Более <span className="orange bold">250 миллионов</span> Американцев покупают на Амазон каждый год.</p>
          </li>
          <li className="home__second-item">
            <img src="/static/dist/assets/img/main/pic-2.png" alt=""/>
          </li>
          <li className="home__second-item">
            <img src="/static/dist/assets/img/main/pic-3.png" alt=""/>
          </li>
          <li className="home__second-item">
            <div className="bubble bubble-right"></div>
            <p>Оборот компании за 2016 год составил <span className="orange bold">120 миллиардов долларов.</span></p>
            <p>И большая часть этого оборота —доход предпринимателей, которые выбрали Амазон как площадку для продажи своего товара.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}