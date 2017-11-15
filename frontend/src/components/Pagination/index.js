import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import './style.scss'

export default function Pagination() {
  return(
    <div className="pagination">
      <NavLink to={`/blog/`} className="pagination__btn pagination__prev">
        <i className="fa fa-angle-left"></i>
      </NavLink>
      <NavLink to={`/blog/`} className="pagination__btn pagination__next">
        <i className="fa fa-angle-right"></i>
      </NavLink>
    </div>
  )
}

function paginationGetter(amount, page) {
  let pageAmount = []

  for (let i = 0; i < amount; i++){
    pageAmount.push(i + 1)
  }

  if(pageAmount.length > 6){
    let beginPoint = 0,
        endPoint = 6,
        beforeEnd = +amount - +page


    if(page > 3 && beforeEnd >= 3){
      beginPoint = +page - 3
      endPoint = +page + 3
    }else if(beforeEnd <= 3){
      endPoint = amount
      beginPoint = +amount - 6
    }

    return pageAmount.slice(beginPoint, endPoint).map(page => {
      return <li className="pagination__item" key={page}>
        <NavLink exact activeClassName='active' to={`/blog/${page}`}>{page}</NavLink>
      </li>
    })
  }

  return pageAmount.map(page => {
    return <li className="pagination__item" key={page}>
      <NavLink exact activeClassName='active' to={`/blog/${page}`}>{page}</NavLink>
    </li>
  })
}