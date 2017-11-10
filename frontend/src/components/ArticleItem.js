import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

export default function ArticleItem({article}) {
  const {id, title, text, img, category, author, date, stars} = article
  return(
    <div>
      <h3 className="article__title">{title?title:text.slice(0, 128)}</h3>
      <img className="article__img" src={img} />
      <ul className="article__info-list">
        <li className="article__info_item">
          Категория: <span>{category}</span>
        </li>
        <li className="article__info_item">
          Дата публикации: <span>{date}</span>
        </li>
        <li className="article__info_item">
          Автор: <span>{author}</span>
        </li>
        <li className="article__info_item">
          Оценка: <ul className="stars__list">{getStars(stars)}</ul>
        </li>
      </ul>
      <p>{text.slice(0, 407)}</p>
      <NavLink className="article__btn" to={`/blog/${id}`}>Читать далее</NavLink>
    </div>
  )
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