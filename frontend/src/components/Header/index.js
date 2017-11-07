import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import './style.scss'

export default class Header extends Component {
  state = {
    mnuIsOpen: false,
    socialIsOpen: false
  }

  componentDidMount = () => {
    let that = this
    document.addEventListener('click', function(e){
      if(e.target.className !== "fa fa-bars" && e.target.className !== "hiden__mnu-btn"){
        that.setState({
          mnuIsOpen: false,
        })
      }
      if(e.target.className !== "fa fa-share-alt" && e.target.className !== "hiden__social-btn"){
        that.setState({
          socialIsOpen: false,
        })
      }
    })
  }
  

  render(){
    const {mnuIsOpen, socialIsOpen} = this.state
    return(
      <header className="header">
        <div className="container header__container">
          <div className="logo">
            <NavLink exact activeClassName='active' to='/'>
              <img src="assets/img/logo.png" alt="logo"/>
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
              <a href="#" className="social__link">
                <FontAwesome name="facebook" />
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link">
                <FontAwesome name="instagram" />
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link">
                <FontAwesome name="youtube" />
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link">
                <FontAwesome name="vk" />
              </a>
            </li>
          </ul>
          <ul className="phone__list">
            <li className="phone__item">
              <a href="tel: +77073510406" className="phone__link">
                <FontAwesome name="phone" />
                <span className="tb__hide">+7 (707) 351-04-06</span>
                <span className="phone__link-number">1</span>
              </a>
            </li>
            <li className="phone__item">
              <a href="tel: +380947122007" className="phone__link">
                <FontAwesome name="phone" />
                <span className="tb__hide">+38(094)712-20-07</span>
                <span className="phone__link-number">2</span>
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