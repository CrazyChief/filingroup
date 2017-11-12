import React from 'react'
import PropTypes from 'prop-types'

import FeedbackSocial from 'components/FeedbackSocial'

export default function FeedbackItem({feedback}) {
  const {id, picPath, author, date, socials, videoLink, text} = feedback
  return(
    <div>
      <div className="feedback__top">
      <div className="feedback__pic">
        <img className="feedback__img" src={picPath} alt="author"/>
      </div>
      <div className="feedback__info">
        <h3 className="feedback__author">{author}</h3>
        <div className="feedback__date">{date}</div>
        <ul className="feedback__socials">
          {socials.map(social => {
            return <li key={social.social} className="feedback__social-item">
              <FeedbackSocial socialItem={social} />
            </li>
          })}
        </ul>
      </div>
      <a href={videoLink} className="video__feedback-link">
        <i className="fa fa-video-camera"/>
        Видео-отзыв
      </a>
    </div>
    <div className="feedback__text">
      {text}
    </div>
  </div>
  )
}