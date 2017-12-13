import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import './style.scss'

export default class Header extends Component {
  state = {
    mnuIsOpen: false,
    socialIsOpen: false,
    headerPadding: 20
  }
  
  componentDidMount = () => {
    document.addEventListener('click', this.handleDocumentClick.bind(this))

    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount =() => {
    document.removeEventListener('click', this.handleDocumentClick)
    window.removeEventListener('scroll', this.handleScroll)
  }

  render(){
    const {mnuIsOpen, socialIsOpen, headerPadding} = this.state
    const style={
      paddingTop: headerPadding,
      paddingBottom: headerPadding
    }
    
    return(
      <header className="header">
        <div className="container header__container" style={style}>
          <div className="logo">
            <NavLink exact activeClassName='active' to='/'>
              <img src="/static/dist/assets/img/logo.png" alt="logo"/>
            </NavLink>
          </div>
          <nav className="mnu">
            <a className="hiden__mnu-btn" href="#" onClick={this.handleMnuClick}>
              <FontAwesome name="bars" />
            </a>
            <ul className={`mnu__list ${mnuIsOpen?'active':''}`}>
              <li className="mnu__item">
                <NavLink activeClassName='active' to='/blog'>Блог</NavLink>
              </li>
              <li className="mnu__item">
                <NavLink activeClassName='active' to='/feedbacks'>Отзывы</NavLink>
              </li>
              <li className="mnu__item">
                <NavLink activeClassName='active' to='/about'>О нас</NavLink>
              </li>
              <li className="mnu__item">
                <NavLink activeClassName='active' to='/products'>Продукты</NavLink>
              </li>
            </ul>
          </nav>
          <a className="hiden__social-btn" href="#" onClick={this.handleSocialClick}>
            <FontAwesome name="share-alt" />
          </a>
          <ul className={`social__list ${socialIsOpen?'active':''}`}>
            <li className="social__item">
              <a href="https://www.facebook.com/infilingroup/" target="_blank" className="social__link">
                <FontAwesome name="facebook" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.instagram.com/filingroup/" target="_blank" className="social__link">
                <FontAwesome name="instagram" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.youtube.com/channel/UCFNgNMVEw1Hivfb_u-dp8Zw" target="_blank" className="social__link">
                <FontAwesome name="youtube" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://vk.com/infilingroup" target="_blank" className="social__link">
                <FontAwesome name="vk" />
              </a>
            </li>
          </ul>
          <ul className="phone__list">
            <li className="phone__item">
              <a href="tel: +380443343679" className="phone__link">
                <FontAwesome name="phone" />
                <span className="tb__hide">+38 044 334-36-79 Киев</span>
                <span className="phone__link-number">1</span>
              </a>
            </li>
            <li className="phone__item">
              <a href="tel: +77273506142" className="phone__link">
                <FontAwesome name="phone" />
                <span className="tb__hide">+7 727 350-61-42 Алматы</span>
                <span className="phone__link-number">2</span>
              </a>
            </li>
            <li className="phone__item">
              <a href="tel: +74993488016" className="phone__link">
                <FontAwesome name="phone" />
                <span className="tb__hide">+7 499 348-80-16 Москва</span>
                <span className="phone__link-number">1</span>
              </a>
            </li>
          </ul>
          <a href="to: mail@filingroup.com" className="mail__link">
            <FontAwesome name="envelope" />
            <span className="tb__hide">mail@filingroup.com</span>
          </a>
        </div>
      </header>
    )
  }
  
  handleScroll = e => {
    let pageYOffset = window.pageYOffset,
        bigSize = 20,
        smallSize = 5
    
    if(pageYOffset >= 222){
      if(this.state.headerPadding !== smallSize){
        this.setState({
          headerPadding: smallSize
        })
      }
    }else{
      if(this.state.headerPadding !== bigSize){
        this.setState({
          headerPadding: bigSize
        })
      }
    }
  }

  handleDocumentClick = e => {
    if(e.target.className !== "fa fa-bars" && e.target.className !== "hiden__mnu-btn"){
      this.setState({
        mnuIsOpen: false,
      })
    }
    if(e.target.className !== "fa fa-share-alt" && e.target.className !== "hiden__social-btn"){
      this.setState({
        socialIsOpen: false,
      })
    }
  }

  handleMnuClick = e => {
    e.preventDefault();

    this.setState({
      mnuIsOpen: !this.state.mnuIsOpen
    })
  }

  handleSocialClick = e => {
    e.preventDefault();

    this.setState({
      socialIsOpen: !this.state.socialIsOpen
    })
  }
}