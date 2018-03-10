import React from 'react'
import {createSelector} from 'reselect'
import {ObjToImmArr} from '../helpers'

const starsGetter = article => article.stars
const articlesGetter = state => state.articles.entities

export const memoizedArticles = createSelector(articlesGetter, (entities) => {
  return ObjToImmArr(entities)
})

export const getStars = createSelector(starsGetter, (stars) => {
  let i = 0,
    total = []

  while (i < stars) {
    let star = {}
    star.icon = <i className="fa fa-star"/>
    star.id = i
    total.push(star)
    i++
  }

  if (total.length < 5) {
    let q = 0

    i = 5 - total.length

    for (let q = 0; q < i; q++) {
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
})