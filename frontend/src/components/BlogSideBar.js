import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import {ObjToImmArr} from '../helpers'

import Addon from 'components/Addon'
import FacebookSubscribe from 'components/FacebookSubscribe'

export default function BlogSideBar({articles}) {
  const lastArticles = ObjToImmArr(articles)
  return(
    <div>
      <Addon />
      <FacebookSubscribe />
      <h3 className="sidebar__titile">Последние статьи</h3>
      <ul className="last__articles-list">
        {lastArticles.map(article => {
          const {slug, title, announce, author, category, content, cover_picture, date_added} = article
          return <li key={slug} className="last__article-item">
            <h4>{title.slice(0, 55)}</h4>
            <div>{date_added.slice(0, date_added.indexOf('T'))}</div>
            <img src={cover_picture} alt="cover pic"/>
            <NavLink to={`/article/${slug}`}>Читать далее</NavLink>
          </li>
        })}
      </ul>
      <h3 className="sidebar__titile">Категории</h3>
    </div>
  )
}