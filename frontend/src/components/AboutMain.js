import React from 'react'
import PropTypes from 'prop-types'

export default function AboutMain({about}) {
  const {
    id,
    title,
    logo,
    text,
    date_added,
    date_updated
  } = about[0]
  return(
    <div>
      <h1 className="section__title">О нас</h1>
      <div className="about__pic">
        <img src={logo} alt="logo" className="about__img"/>
      </div>
      <div dangerouslySetInnerHTML={createMarkup(text)} />
      <a href="#" className="get__link centered">
        <i className="fa fa-play-circle-o"></i>
        Получить доступ к видео
      </a>
    </div>
  )
  return (
    <div>
      About
    </div>
  )
}