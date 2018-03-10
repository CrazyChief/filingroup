import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

import './style.scss'

import FirstSection from 'components/HomeSections/FirstSection'
import SecondSection from 'components/HomeSections/SecondSection'
import ThirdSection from 'components/HomeSections/ThirdSection'
import FourthSection from 'components/HomeSections/FourthSection'
import FifthSection from 'components/HomeSections/FifthSection'

export default class Home extends Component{
  static propTypes = {
  }
  
  render(){
    return(
      <main className="main home" ref={(section) => { this.Violet = section; }}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </main>
    )
  }
}