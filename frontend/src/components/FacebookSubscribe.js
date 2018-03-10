import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FacebookSubscribe extends Component{
  static propTypes = {
  }
  render(){
    return(
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Finfilingroup%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=345870219218998" width="340" height="500" style={{border:'none', marginBottom: 50,overflow:'hidden'}} scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
    )
  }
}