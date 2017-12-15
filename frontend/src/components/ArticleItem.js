import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import {getStarsFabric} from 'selectors'
import {createMarkup} from '../helpers'

export default function ArticleItem({article}) {
  const {slug, title, announce, author, category, content, cover_picture, date_added} = article
  return(
    <div>
      <h3 className="article__title">{title.slice(0, 128)}</h3>
      <img className="article__img" src={`${cover_picture}`} />
      <ul className="article__info-list">
        <li className="article__info_item">
          Категория: <span>{category.title}</span>
        </li>
        <li className="article__info_item">
          Дата публикации: <span>{date_added.slice(0, date_added.indexOf('T'))}</span>
        </li>
        <li className="article__info_item">
          Автор: <span>{getName(author)}</span>
        </li>
        <li className="article__info_item">
          Оценка: <ul className="stars__list">{getStars(4)}</ul>
        </li>
      </ul>
      <div dangerouslySetInnerHTML={createMarkup(announce)} />
      <NavLink className="article__btn" to={`/blog/${slug}`}>Читать далее</NavLink>
    </div>
  )
}

function getName(author) {
  const {username, first_name, last_name} = author
  if (first_name && last_name) {
    return `${first_name} ${last_name}`
  }
  return username
}

function getStars(stars) {
  let i = 0,
      total = []

  while(i<stars){
    let star = {}
    star.icon = <i className="fa fa-star"/>
    star.id = i
    total.push(star)
    i++
  }

  if(total.length < 5){
    let q = 0

    i = 5 - total.length

    for(let q=0; q<i; q++){
      let star = {}
      star.icon = <i className="fa fa-star-o"/>
      star.id = q + 5
      total.push(star)
    }
  }
  
  return total.map(item => {
    return <li key={item.id} className="star__item">
      {item.icon}
    </li>
  })
}