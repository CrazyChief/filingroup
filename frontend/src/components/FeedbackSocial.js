import React from 'react'
import PropTypes from 'prop-types'

export default function FeedbackSocial({socialItem}) {
  const {social, link} = socialItem
  return(
    <a href={link} className="feedback__social-link">
      {getSocial(social)}
    </a>
  )
}

function getSocial(social) {
  if(social == 'facebook'){
    return <i className="fa fa-facebook"/>
  }
  if(social == 'instagram'){
    return <i className="fa fa-instagram"/>
  }
  if(social == 'youtube'){
    return <i className="fa fa-youtube"/>
  }
  if(social == 'vk'){
    return <i className="fa fa-vk"/>
  }
  return <i className="fa fa-share-alt"/>
}