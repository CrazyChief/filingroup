import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Youtube extends Component{
  static propTypes = {
  }

  componentDidMount = () => {
    window.addEventListener('load', () => {
      this.onLoad("UCFNgNMVEw1Hivfb_u-dp8Zw")
    })
  }

  render(){
    return(
      <div ref={youtube => {this.youtube = youtube}} />
    )
  }

  onLoad = (channel) => {
    let options = {
      'channel': channel,
      'layout': 'full'
    }
    gapi.ytsubscribe.render(this.youtube, options)
  }
}