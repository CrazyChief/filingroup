import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

class ArticleModal extends Component{
  static propTypes = {
  }
  render(){
    const {match, articles} = this.props
    console.log(match)
    return(
      <div>
        
      </div>
    )
  }
}

export default connect(({articles}) => ({articles}), null)(ArticleModal)