import React from 'react'
import PropTypes from 'prop-types'

export default function Loader() {
  return(
    <main className='main loader__wrap'>
      <img src='/static/dist/assets/img/loader.gif' alt="loader"/>
    </main>
  )
}