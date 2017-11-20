import React from 'react'
import PropTypes from 'prop-types'

import {createMarkup} from '../helpers'

export default function FeedbackItem({feedback}) {
  const {
    first_name, 
    last_name, 
    avatar, 
    link_to_fb, 
    link_to_vk, 
    link_to_inst, 
    link_to_linkedin, 
    review, 
    video, 
    date_added} = feedback
  return(
    <div>
      <div className="feedback__top">
      <div className="feedback__pic">
        <img className="feedback__img" src={avatar} alt="author"/>
      </div>
      <div className="feedback__info">
        <h3 className="feedback__author">{first_name+' '+last_name}</h3>
        <div className="feedback__date">{date_added.slice(0, date_added.indexOf('T'))}</div>
        <ul className="feedback__socials">
          <li className="feedback__social-item">
            <a href={link_to_fb} target="_blank" className="feedback__social-link">
              <i className="fa fa-facebook"/>
            </a>
          </li>
          <li className="feedback__social-item">
            <a href={link_to_inst} target="_blank" className="feedback__social-link">
              <i className="fa fa-instagram"/>
            </a>
          </li>
          <li className="feedback__social-item">
            <a href={link_to_linkedin} target="_blank" className="feedback__social-link">
              <i className="fa fa-linkedin"/>
            </a>
          </li>
          <li className="feedback__social-item">
            <a href={link_to_vk} target="_blank" className="feedback__social-link">
              <i className="fa fa-vk"/>
            </a>
          </li>
        </ul>
      </div>
      {getVideo(video)}
    </div>
    <div className="feedback__text">
      <div dangerouslySetInnerHTML={createMarkup(review)} />
    </div>
  </div>
  )
}

function getVideo(video) {
  if(video){
    return <a href={video} target="_blank" className="video__feedback-link">
        <i className="fa fa-video-camera"/>
        Видео-отзыв
      </a>
  }

  return <div style={{color: 'white', width: 200}}/>
}